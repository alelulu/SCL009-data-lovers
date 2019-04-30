global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]
  }, {
    "id": 25,
    "num": "025",
    "name": "Pikachu",
    "type": [
      "Electric"
    ]
  }, {
    "id": 87,
    "num": "087",
    "name": "Dewgong",
    "img": "http://www.serebii.net/pokemongo/pokemon/087.png",
    "type": [
      "Water",
      "Ice"
    ]
  }
]

describe('data.filterType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterType, 'function');
  });

  it('debería retornar el objeto Pikachu al filtrar por tipo Electric', () => {
    assert.deepEqual(window.data.filterType(data, "Electric"), [{
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]
    }]);
  });
})
