import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-with-apis';
  pokemons: any[] = [];

  pokemonTypeColorMapping: Record<string, string> = {
    normal: 'gray',
    grass: 'green',
    electric: 'yellow',
  }
  pokemonTypeColor = '#4eceb1';

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(
      data => {
        console.log(data);
        this.pokemons = data;
      },
      err => {
        console.error(err);
      }
    )
  }
}
