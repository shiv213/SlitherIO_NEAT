from os import path
import neat
import neatviz as visualize

runs_per_net = 5
simulation_seconds = 60.0


# based off of https://github.com/CodeReclaimers/neat-python/blob/master/examples/single-pole-balancing/evolve-feedforward.py

def todo_snake_sim():
    return "implement the snake server client setup + sim here"


# most stuff assumes a tightly control simulation where we get data at each step,
# but when we run a live thing it may not be so? network latency, data exfil latency, control input latency.
# how should we handle these. should we even handle these. should we simulate these delays in our server?

def eval_genome(genome, config):
    # run the simulation in here, then output the final score
    net = neat.nn.FeedForwardNetwork.create(genome, config)
    fitnesses = []

    for runs in range(runs_per_net):
        sim = todo_snake_sim()
        # we define the fitness to be a weight sum based on the total time survived and the length
        fitness = 0.0
        while sim.t < simulation_seconds:
            inputs = sim.get_scaled_state()  # returns a properly encoded version of GameData hopefully
            # i think we are allowing ai to press multiple buttons at the same time
            # like you need to be able to boost and turn at the same time
            action = net.activate(inputs)
            sim.step(action)
            length = sim.get_current_length()

            if sim.is_stopped():
                break

            fitness = 0.70 * length + 0.30 * sim.t

        fitnesses.append(fitness)

    # couple of ways to do this
    # we could return the min of the fitness,
    # which would mean a nets' fitness is how it perforemd worst
    # so anything good will at least perform this much
    # we could also do others but this makes sense for now
    return min(fitnesses)


def eval_genomes(genomes, config):
    """
    The key thing you need to figure out for a given problem is how to measure the fitness of the genomes that are produced by NEAT.
    Fitness is expected to be a Python float value.
    If genome A solves your problem more successfully than genome B, then the fitness value of A should be greater than the value of B.
    The absolute magnitude and signs of these fitnesses are not important, only their relative values.
    """
    for genome_id, genome in genomes:
        genome.fitness = eval_genome(genome, config)


def run(config_file):
    # Load configuration.
    config = neat.Config(neat.DefaultGenome, neat.DefaultReproduction,
                         neat.DefaultSpeciesSet, neat.DefaultStagnation,
                         config_file)

    # Create the population, which is the top-level object for a NEAT run.
    p = neat.Population(config)

    # Add a stdout reporter to show progress in the terminal.
    p.add_reporter(neat.StdOutReporter(True))
    stats = neat.StatisticsReporter()
    p.add_reporter(stats)
    p.add_reporter(neat.Checkpointer(25, 600))  # every 25 epochs(?) or every 600 seconds

    # Run for up to 300 generations.
    winner = p.run(eval_genomes, 300)

    # Display the winning genome.
    print('\nBest genome:\n{!s}'.format(winner))

    # Show output of the most fit genome against training data.
    print('\nOutput:')
    winner_net = neat.nn.FeedForwardNetwork.create(winner, config)
    # TODO play the game here with the winning net on non-headless webdriver or a real server :p

    # graph viz not installed, need root privelages
    # node_names = {-1:'A', -2: 'B', 0:'A XOR B'}
    # visualize.draw_net(config, winner, True, node_names=node_names)
    visualize.plot_stats(stats, ylog=False, view=True)
    visualize.plot_species(stats, view=True)


if __name__ == '__main__':
    local_dir = path.dirname(__file__)
    config_path = path.join(local_dir, 'config-feedforward.ini')
    run(config_path)
