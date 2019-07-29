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
  console.log(this.PokemonService.getAllPokemon());
  }
}
