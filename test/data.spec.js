global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('data.filterType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterType, 'function');
  });




  it('debería retornar "Electric" para Pikachu', () => {
    assert.equal(window.data.filterType("Pikachu", "Electric"), 'Pikachu');
  });
})
