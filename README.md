# Notes
## Model design

* inputs
	+ current snake
		- position x (potentially as queue)
		- position y (potentially as queue)
		- current speed (potentially history / queue as well)
		- current heading (potentially as queue as well)
		- current length and thiccness
		- fifo queue of n historical positions of snake segments
		- (superflous info, model should learn around) max turn radius for our snake
	+ environment
		- other snakes visible and just all the data we get about our snake
		- positions of food in view
		- values of food in view

	
* fitness function. (should take into account the following)
	- current length most weight
	- time survived
	- snakes killed
	- distance traveled (low weight) (negatively correlate with staying in one spot)

* controls - (3 outputs)
	* left arrow - rotate left
	* right arrow - rotate right
	* forward arrow - boost



## JS Notes
global vars

* `snake` - our snake
	- `ang` - snakes heading
	- `sp` - speed default 5.78, max 14.00

* `snakes` - snakes that are visible on the screen
* `os` opponent snakes

```js
function currentScore(snake) {
	Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1;
}

```

Prey are the moving balls

ws protocol
https://github.com/ClitherProject/Slither.io-Protocol/blob/master/Protocol.md


we could use this to control the game
and get data out, rather than doing all the hard RE work ourselves

https://github.com/ClitherProject/Slither.io-Protocol/blob/master/slither_debug.js


libraries

very new but exists https://github.com/ahmedfgad/GeneticAlgorithmPython


https://deap.readthedocs.io/en/master/

https://github.com/diogomatoschaves/geneal