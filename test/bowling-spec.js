import { Game } from '../Game';

const Lab  = require('lab'),
      lab = exports.lab = Lab.script(),
//       describe = lab.describe,
      expect = lab.expect;
//       it = lab.it;

// const { it } = exports.lab = Lab.script();
// const lab = require('lab');
// const expect = Lab.expect;

// console.log('it is: ', it);

lab.test('has a game', (done) => {
  expect(1+1).to.equal(2);
  done();
})

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
