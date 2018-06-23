export default class Game {
	constructor() {
		this._frames = [];
		
		for (let ii=0;ii<10;ii++) {
			this._frames[ii] = new Frame(this);
		}
		this._frames[9] = new TenthFrame(this);
		this.currentFrame = 0;
		this._score = 0;
	}
	roll(pins) {
		console.log(`entering Game.roll() frame index is: ${this.currentFrame}`);
		// turn starts at 1, human-readable
		if (this.currentFrame < 10) {
			this._frames[this.currentFrame].roll(pins);
			// TODO: replace naive impl with on using map
		} 
	}
	score() {
		let retval = 0;
		this._frames.forEach((ff) => {
			// console.log(`the score is: ${ff.score()}`);
			retval += ff.score();
		});
		return retval;
	}
}

class Frame {
	constructor(game) {
		this._rollOne = -1;
		this._rollTwo = -1;
		this._game = game;
	}
	roll(pins) {
		if (this._rollOne == -1) {
			console.log('setting pins for rollOne');
			this._rollOne = pins;
		} else if (this._rollOne != 10 && this._rollTwo == -1) {
			console.log('setting pins for rollTwo');
			this._rollTwo = pins;
			// console.log(`game is: ${this._game}`);
			this._game.currentFrame += 1;
		} else if (this._rollOne == 10) { 
			this._rollTwo = null;
		} else {
			console.log('eleseeeeeeee');
		}
	}
	score() {
		// console.log(`what is: {this._rollOne + this._rollTwo`)
		return this._rollOne + (null ? 0 : this._rollTwo);
	}
}

class TenthFrame extends Frame {
	constructor(game) {
		super(game);
		this._rollThree = null;
	}
	roll(pins) {
		if (this._rollThree == -1) {
			this._rollThree = pins;
			this._game.currentFrame += 1;
		}
		// TODO: below is printing twice WHY/////??????
		console.log('INSIDE TENTHFRAME ROLL');

	}
	score() {
		// console.log('INSIDE TENTHFRAME SCORE!');
		return this._rollOne + this._rollTwo + this._rollThree;
	}
}
