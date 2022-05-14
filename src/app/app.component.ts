import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from './interfaces/pokemon.iternface';
import { PokemonService } from './services/pokemon/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-with-apis';
  pokemons: Pokemon[] = [];

  pokemonTypeColorMapping: Record<PokemonType, string> = {
    normal: 'gray',
    grass: 'green',
    electric: 'yellow',
  }

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe({
      next: data => {
        console.log(data);
        this.pokemons = data;
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
