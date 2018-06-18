export default class Game {
	constructor() {
		this.frames = [10];
		this.tenthFrame = null;
		
		for (let ii=0;ii<this.frames.length;ii++) {
			this.frames[ii] = new Frame();
		}
		this.tenthFrame = new Frame();
	}
	roll(pins) {
		return true;
	}
	score() {
		return 0;
	}
}

class Frame {
	constructor() {
		this.rollOne = new Roll();
		this.rollTwo = new Roll();
	}
	score() {
		return 0;
	}
}

class TenthFrame extends Frame {
	constructor() {
		super();
		this.rollThree = new Roll();
	}
	score() {
		return 0;
	}
}

class Roll {
	constructor() {
		console.log('constructing a roll');
		this.pins = 0;
	}
	roll(pins) {
		this.pins = pins;
	}
}