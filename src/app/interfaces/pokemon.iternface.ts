export interface Pokemon {
  name: string,
  images: {
    front: string,
    back: string,
  },
  type: PokemonType,
  weigth: number,
  habilities: PokemonAbilities[]
}

export type PokemonType = 'normal' | 'electric' | 'grass'

export interface PokemonAbilities {
  name: 'salto' | 'correr',
  value: number
}
