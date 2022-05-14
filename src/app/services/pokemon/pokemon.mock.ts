import { Pokemon } from "src/app/interfaces/pokemon.iternface"

function pokemonMock() {
  return {
    name: 'Ditto',
    images: {
      'front': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      'back': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
    },
    type: 'normal',
    weigth: 120,
    habilities: [
      {
        name: 'correr',
        value: 5,
      },
      {
        name: 'salto',
        value: 8,
      }
    ]
  }
};

//export const pokemonsMock = Array(8).fill(pokemonMock());
export const pokemonsMock: Pokemon[] = [
  {
    name: 'Ditto',
    images: {
      'front': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      'back': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
    },
    type: 'normal',
    weigth: 120,
    habilities: [
      {
        name: 'correr',
        value: 5,
      },
      {
        name: 'salto',
        value: 8,
      }
    ]
  },
  {
    name: 'Bolbasaur',
    images: {
      'front': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      'back': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
    },
    type: 'grass',
    weigth: 120,
    habilities: [
      {
        name: 'correr',
        value: 5,
      },
      {
        name: 'salto',
        value: 8,
      }
    ]
  },
  {
    name: 'Pikachu',
    images: {
      'front': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      'back': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
    },
    type: 'electric',
    weigth: 120,
    habilities: [
      {
        name: 'correr',
        value: 5,
      },
      {
        name: 'salto',
        value: 8,
      }
    ]
  }
]
