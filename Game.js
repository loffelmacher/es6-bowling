export default class Game {
	constructor() {
		this._currentRoll = 0;
		this._rolls = [21];
		for (let ii=0;ii<=21;ii++) {
			this._rolls[ii] = 0;
		}
	}
	roll(pins) {
		this._rolls[this._currentRoll++] = pins;
	}
	score() {
		let score = 0, frameIndex = 0;
		for (let frame=0; frame<10; frame++) {
			if (this._isStrike(frameIndex)) {
				score += 10 + this._strikeBonus(frameIndex);
				frameIndex += 1;
			} else if (this._isSpare(frameIndex)) {
				score += 10 + this._spareBonus(frameIndex);
				frameIndex += 2;
			} else {
				score += this._sumOfBallsInFrame(frameIndex);
				frameIndex += 2;
			}
		}
		return score;
	}
	_isSpare(frameIndex) {
		return this._rolls[frameIndex] + this._rolls[frameIndex+1] == 10;
	}
	_isStrike(frameIndex) {
		return this._rolls[frameIndex] == 10;
	}
	_spareBonus(frameIndex) {
		return this._rolls.length > frameIndex+1 ? this._rolls[frameIndex+2] : 0;
	}
	_strikeBonus(frameIndex) {
		let next = this._rolls.length > frameIndex ? this._rolls[frameIndex+1] : 0;
		let nextNext = this._rolls.length > frameIndex+1 ? this._rolls[frameIndex+2] : 0
		return  next + nextNext;
	}
	_sumOfBallsInFrame(frameIndex) {
		return this._rolls[frameIndex] + this._rolls[frameIndex+1]
	}
}
