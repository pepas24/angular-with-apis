import { Component } from '@angular/core';
import { pokemonsMock } from './services/pokemon.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-apis';
  pokemons = pokemonsMock;

  pokemonTypeColorMapping: Record<string, string> = {
    normal: 'gray',
    grass: 'green',
    electric: 'yellow',
  }
  pokemonTypeColor = '#4eceb1';
}
