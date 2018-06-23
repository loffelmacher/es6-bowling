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
		for (let ii=0; ii<21; ii+=2) {
			let xx = this._rolls[ii];
			let yy = this._rolls[ii+1];
			if (xx + yy == 10) { // spare
				score += 10 + ((ii+2 <= 21) ? this._rolls[ii+2] : 0);
			} else {
				score += xx + yy;
			}
		}
		return score;
	}
}
