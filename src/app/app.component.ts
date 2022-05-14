import { Component } from '@angular/core';
import { pokemonMock } from './services/pokemon.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-apis';
  pokemon = pokemonMock;

  pokemonTypeColorMapping: Record<string, string> = {
    normal: 'gray',
    hierba: 'green',
  }
  pokemonTypeColor = '#4eceb1';
}
