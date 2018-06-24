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
		for (let frame=0; frame<21; frame+=2) {
			let thisRoll = this._rolls[frame];
			let nextRoll = this._rolls[frame+1];
			if (thisRoll + nextRoll == 10) { // spare
				score += 10 + ((frame+2 <= 21) ? this._rolls[frame+2] : 0);
			} else {
				score += thisRoll + nextRoll;
			}
		}
		return score;
	}
	_isSpare() {

	}
}
