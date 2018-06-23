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
  gg.roll(5);
  gg.roll(5);
  gg.roll(3);
  rollMany(17, 0);
  expect(gg.score()).to.equal(16);
  done();
});



















// const gg = new Game();

// describe('game:', function() {
//   describe('foo', function(cb) {
//     it('bar', function() {
//       cb();
//     });
//   });
// });


// describe('game:', function() {
//   describe('foo', function() {
//     it('bar', function() {
//       return true;

//       // return api.get(apiPath + '/vin/5N1AN08U08C516104')
//       //   .expect(200)
//       //   .then(function({body}){
//       //     expect(body).to.contain(['success', 'data']);
//       //     expect(body.success).to.be.true();
//       //     expect(body.data).to.contain(['basicData']);
//       //     expect(body.data.basicData).to.contain(['year', 'make', 'model']);
//       //     expect(body.data.basicData.year).to.be.equal(2008);
//       //     expect(body.data.basicData.make.toLowerCase()).to.be.equal('nissan');
//       //     expect(body.data.basicData.model.toLowerCase()).to.contain('xterra');
//       //     expect(body.data.basicData.source.toLowerCase()).to.contain(helpers.NADA.toLowerCase());
//       //   });
//     });
//   });
// });
