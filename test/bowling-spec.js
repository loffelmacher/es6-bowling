import Game from '../Game';

const Lab  = require('lab'),
      lab = exports.lab = Lab.script(),
      expect = lab.expect;
let gg = null;

function rollMany(nn, pins) {
  for (let ii=nn;ii>0;ii--) {
    gg.roll(pins);
  }
}

function rollSpare() {
  gg.roll(5);
  gg.roll(5);
}

lab.beforeEach((done) => {
  gg = new Game;
  done();
});

lab.test('All Gutter Balls', (done) => {
  rollMany(20, 0);
  expect(gg.score()).to.equal(0);
  done();
});

lab.test('All Ones', (done) => {
  rollMany(20, 1);
  expect(gg.score()).to.equal(20);
  done();
});

lab.test('Test One Spare', (done) => {
  rollSpare();
  gg.roll(3);
  rollMany(17, 0);
  expect(gg.score()).to.equal(16);
  done();
});

lab.test('Test One Strike', (done) => {
  gg.roll(10);
  gg.roll(3);
  gg.roll(4);
  rollMany(16, 0);
  expect(gg.score()).to.equal(24);
  done();
});
