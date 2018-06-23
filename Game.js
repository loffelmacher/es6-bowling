export default class Game {
	constructor() {
		this.currentFrame = 0;
		this._score = 0;
		this._frames = [];
		for (let ii=0;ii<10;ii++) {
			this._frames[ii] = new Frame(this);
		}
		this._frames[9] = new TenthFrame(this);
	}
	roll(pins) {
		if (this.currentFrame < 10) { 		// turn starts at 1, human-readable
			this._frames[this.currentFrame].roll(pins, this.currentFrame);
			// TODO: replace naive impl with on using map
		} 
	}
	score() {
		let retval = 0;
		this._frames.forEach((ff) => {
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
		this._nextFrame = null;
	}
	roll(pins, ord) {
		if (this._rollOne == -1) {
			this._rollOne = pins;
		} else if (this._rollOne != 10 && this._rollTwo == -1) {
			this._rollTwo = pins;
			this._game.currentFrame += 1;
		} else if (this._rollOne == 10) { 
			this._rollTwo = null; // TODO: is this correct?
		} else {
			console.error('eleseeeeeeee');
		}

		// see if we set ref to next frame
		if (pins == 10 || this._rollTwo != -1) {
			this._nextFrame = 
		}
	}
	score() {
		// this can return null/unknown result when 
		if (this._isStrike() && this._isScorable()) {
			return this._rollOne;
		} else if (this._isSpare() && this._isScorable()) {
			return this._rollOne + (null ? 0 : this._rollTwo); 
		} else if (this._isScorable()) {
			return this._rollOne + (null ? 0 : this._rollTwo); 
		}
		return 0;
	}
	_isStrike() {
		return this._rollOne == 10;
	}
	_isSpare() {
		return this._rollOne + this._rollTwo == 10;
	}
	_isScorable(){
		return true;
	}
}

class TenthFrame extends Frame {
	constructor(game) {
		super(game);
		this._rollThree = -1;
	}
	roll(pins) {
		if (this._rollThree == -1 && (
				this._rollOne == 10 || 
				this._rollOne + this._rollTwo == 10
			)) {
			this._rollThree = pins;
			this._game.currentFrame += 1;
		} else {
			this._rollThree = 0;
			super.roll(pins);
		}

	}
	score() {
		return this._rollOne + this._rollTwo + this._rollThree;
	}
}
