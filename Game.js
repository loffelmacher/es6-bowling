export default class Game {
	constructor() {
		this._currentRoll = 0;
		this._rolls = [21];
		for (let ii=0;ii<=21;ii++) {
			this._rolls[ii] = 0;
		}
	}
	roll(pins) {
		this._rolls[this._currentRoll] = pins;
		this._currentRoll += 1;
	}
	score() {
		let score = 0;
		let frameIndex = 0;
		for (let frame=0; frame<10; frame++) {
			if (this._isSpare(frameIndex)) {
				score += 10 + ((frameIndex+2 <= 21) ? this._rolls[frameIndex+2] : 0);
			} else {
				score += this._rolls[frameIndex] + this._rolls[frameIndex+1];
			}
			frameIndex += 2;
		}
		return score;
	}
	_isSpare(frameIndex) {
		return this._rolls[frameIndex] + this._rolls[frameIndex+1] == 10;
	}
}
