global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "egg": "2 km",
    "type": [
      "Grass",
      "Poison"
    ]
  }, {
    "id": 25,
    "num": "025",
    "name": "Pikachu",
    "egg": "2 km",
    "type": [
      "Electric"
    ]
  }, {
    "id": 87,
    "num": "087",
    "name": "Dewgong",
    "egg": "5 km",
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
      "egg": "2 km",
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
    "egg": "2 km",
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
    "egg": "5 km",
    "type": [
      "Water",
      "Ice"
      ]
    }]);
  });


  it('debería retornar el objeto Dewgong al filtrar por huevo 5 km', () => {
    assert.deepEqual(window.data.filterEgg(data, "5 km"), [{
    "id": 87,
    "num": "087",
    "name": "Dewgong",
    "egg": "5 km",
    "type": [
      "Water",
      "Ice"
      ]
    }]);
  });
});

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
        "egg": "2 km",
        "type": [
          "Grass",
          "Poison"
        ]
      }, {
        "id": 87,
        "num": "087",
        "name": "Dewgong",
        "egg": "5 km",
        "type": [
          "Water",
          "Ice"
        ]
      }, {
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "egg": "2 km",
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
        "egg": "2 km",
        "type": [
          "Electric"
        ]
      }, {
        "id": 87,
        "num": "087",
        "name": "Dewgong",
        "egg": "5 km",
        "type": [
          "Water",
          "Ice"
        ]
      }, {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "egg": "2 km",
        "type": [
          "Grass",
          "Poison"
        ]
      }
    ]);
  });

  it('debería retornar el array ordenado por número ascendente', () => {
    assert.deepEqual(window.data.orderingBy(data, "id", "asc"), [
      {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "egg": "2 km",
        "type": [
          "Grass",
          "Poison"
        ]
      },{
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "egg": "2 km",
        "type": [
          "Electric"
        ]
      }, {
        "id": 87,
        "num": "087",
        "name": "Dewgong",
        "egg": "5 km",
        "type": [
          "Water",
          "Ice"
        ]
      }
    ]);
  });

  it('debería retornar el array ordenado por número descendiente', () => {
    assert.deepEqual(window.data.orderingBy(data, "id", "des"), [
      {
        "id": 87,
        "num": "087",
        "name": "Dewgong",
        "egg": "5 km",
        "type": [
          "Water",
          "Ice"
        ]
      },{
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "egg": "2 km",
        "type": [
          "Electric"
        ]
      }, {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "egg": "2 km",
        "type": [
          "Grass",
          "Poison"
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
});

describe('data.getPkmnById', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.getPkmnById, 'function');
  });

  it('debería retornar el objeto del id entregado', () => {
    assert.deepEqual(window.data.getPkmnById(data, 1), {
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "egg": "2 km",
      "type": [
        "Grass",
        "Poison"
      ]
    });
  });
});
