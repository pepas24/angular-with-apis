import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { pokemonsMock } from './pokemon.mock';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) { }

  getPokemons() {
    // return this.http.get('https://pokeapi.co/api/v2/pokemon');
    return of(pokemonsMock);
  }
}
