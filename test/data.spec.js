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

  it('debería retornar el objeto Bulbasaur al filtrar por tipo Grass', () => {
    assert.deepEqual(window.data.filterType(data, "Grass"), [{
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
      ]
    }]);
  });

  it('debería retornar el objeto Dewgong al filtrar por tipo Water', () => {
    assert.deepEqual(window.data.filterType(data, "Water"), [{
    "id": 87,
    "num": "087",
    "name": "Dewgong",
    "type": [
      "Water",
      "Ice"
      ]
    }]);
  });
})

describe('data.orderingBy', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.orderingBy, 'function');
  });

  it('debería retornar el array ordenado de la A a la Z', () => {
    assert.deepEqual(window.data.orderingBy(data, "name", "asc"), [
      {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "type": [
          "Grass",
          "Poison"
        ]
      }, {
        "id": 87,
        "num": "087",
        "name": "Dewgong",
        "type": [
          "Water",
          "Ice"
        ]
      }, {
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "type": [
          "Electric"
        ]
      }
    ]);
  });

  it('debería retornar el array ordenado de la Z a la A', () => {
    assert.deepEqual(window.data.orderingBy(data, "name", "des"), [
      {
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
        "type": [
          "Water",
          "Ice"
        ]
      }, {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "type": [
          "Grass",
          "Poison"
        ]
      }
    ]);
  });

  it('debería retornar el array ordenado por número', () => {
    assert.deepEqual(window.data.orderingBy(data, "id", "asc"), [
      {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "type": [
          "Grass",
          "Poison"
        ]
      },{
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
        "type": [
          "Water",
          "Ice"
        ]
      }
    ]);
  });
});

describe('data.calculate', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.calculate, 'function');
  });

  it('debería retornar el número total de array entregado', () => {
    assert.deepEqual(window.data.calculate(data), 3);
  });
})
