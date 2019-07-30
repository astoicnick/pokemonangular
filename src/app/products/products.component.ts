import { Component, OnInit } from '@angular/core';
import { PapiService } from '../papi.service';
import { pokemon } from '../models/pokemon';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
pokemonList: any[];
blankpokevar: [];


  constructor(private PokemonService: PapiService) { }  

  ngOnInit() {
<<<<<<< Updated upstream
  console.log(this.PokemonService.getAllPokemon())
=======
    this.imageArray = [];
    this.pokemonList = [];
    console.log('hey');
    this.getPokemon();
  }
  getPokemon() {
    var blank: [];
    this.PokemonService.getAllPokemon()
    .subscribe(p => { 
      this.pokemonList = p.results;
      this.getUrls();
    });
>>>>>>> Stashed changes
  }
}

