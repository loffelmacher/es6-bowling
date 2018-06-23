export default class Game {
	constructor() {
		this._frames = [];
		
		for (let ii=0;ii<10;ii++) {
			this._frames[ii] = new Frame();
		}
		// this._frames[9] = new TenthFrame();
		this._turn = 1;
		this._score = 0;
	}
	roll(pins) {
		if (this._turn < 10) {
			this._frames[this._turn].roll(pins);
			this._turn++;
		} else {
			console.log('turn is still low: ', _turn);
		}
	}
	score() {
		return 0;
	}
}

class Frame {
	constructor() {
		this._rollOne = -1;
		this._rollTwo = -1;
	}
	roll(pins) {
		if (this._rollOne != -1) {
			this._rollOne = pins;
		} else if (this._rollOne != 10 && this._rollTwo != -1) {
			this._rollTwo = pins;
		} else {
			this._nextFrame = -1; // not right!!!!!!!!!!!!!!!!!!!!!!!!!!!
		}
	}
	score() {
		return this._rollOne + this._rollTwo;
	}
}

class TenthFrame extends Frame {
	constructor() {
		super();
		this._rollThree = null;
	}
	score() {
		return 0;
	}
}
