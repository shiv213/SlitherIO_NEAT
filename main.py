import threading
from os import path
import neat
import neatviz as visualize
from game import Game
import time

runs_per_net = 1
simulation_seconds = 25.0


# based off of https://github.com/CodeReclaimers/neat-python/blob/master/examples/single-pole-balancing/evolve
# -feedforward.py

def todo_snake_sim():
    return "implement the snake server client setup + sim in a separate thread..."


# most stuff assumes a tightly control simulation where we get data at each step,
# but when we run a live thing it may not be so? network latency, data exfil latency, control input latency.
# how should we handle these. should we even handle these. should we simulate these delays in our server?

def eval_genome(genome, config):
    # run the simulation in here, then output the final score
    net = neat.nn.FeedForwardNetwork.create(genome, config)
    fitnesses = []
    current_run = 0
    while current_run < runs_per_net:
        print('creating new sim')
        sim = Game()
        t = threading.Thread(target=sim.run_slither, daemon=True)
        t.start()

        # print('started thread')
        # while (time.time() - sim.start_time) < sim_timeout:
        while not sim.is_ready:
            # waiting for the game to get ready
            time.sleep(0.1)

        # print('waiting for sim to be ready')
        # maybe make this just while not sim.stopped() to let them have a fun time
        elapsed_time = 0
        # print('before while sim not stopped in eval_genome')
        while elapsed_time < simulation_seconds and not sim.get_stopped():
            # print('inside while sim not stopped in eval_genome')
            inputs = sim.get_scaled_inputs()  # returns a properly encoded version of GameData hopefully
            if inputs != 0:
                action = net.activate(inputs)
                sim.submit_action(action)
                elapsed_time = time.time() - sim.start_time
        if sim.get_current_data() is not None:
            # print('after while sim not stopped in eval_genome')
            # we define the fitness to be a weight sum based on the total time survived and the length
            length = sim.get_current_data().snake.score
            if elapsed_time >= simulation_seconds:
                print("genome", sim.start_time, "timed out with a score of", length)
            else:
                print("genome", sim.start_time, "ended with a score of", length)
            sim.kill_thread()
            # print('after sim kill thread')
            t.join()
            # print('after t join')
            fitness = 0.70 * length + 0.30 * elapsed_time
            current_run += 1
            fitnesses.append(fitness)

    # couple of ways to do this
    # we could return the min of the fitness,
    # which would mean a nets' fitness is how it performed worst
    # so anything good will at least perform this much
    # we could also do others (like mean or max) but this makes sense for now
    # this is mainly because we are doing
    final_fitness = min(fitnesses)
    return final_fitness


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
    # every 25 epochs(?) or every 600 seconds:
    p.add_reporter(neat.Checkpointer(25, 600, filename_prefix="slither-checkpoint-"))

    # Run for up to 300 generations.
    winner = p.run(eval_genomes, 300)

    # Display the winning genome.
    print('\nBest genome:\n{!s}'.format(winner))

    # Show output of the most fit genome against training data.
    print('\nOutput:')
    winner_net = neat.nn.FeedForwardNetwork.create(winner, config)
    # TODO play the game here with the winning net on non-headless webdriver or a real server :p

    visualize.plot_stats(stats, ylog=False, view=True)
    visualize.plot_species(stats, view=True)


def run_checkpoint(checkpoint_name, checkpoint):
    p = neat.Checkpointer.restore_checkpoint(checkpoint_name % checkpoint)
    winner = p.run(eval_genomes, 1)  # find the winner in restored population
    # winner_net = neat.nn.FeedForwardNetwork.create(winner, p.config)
    print(p.best_genome)
    # show winner net
    visualize.draw_net(p.config, winner, True)


# TODO we'll need to do multithreading for running multiple agents at the same time

if __name__ == '__main__':
    try:
        local_dir = path.dirname(__file__)
        config_path = path.join(local_dir, 'config-feedforward.ini')
        run(config_path)
        run_checkpoint('slither-checkpoint-%i', 6)
    except KeyboardInterrupt:
        # todo save some checkpoints here
        print("Exitting due to Ctrl+C")
