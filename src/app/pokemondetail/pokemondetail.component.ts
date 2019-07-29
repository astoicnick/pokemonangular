import { Component, OnInit } from '@angular/core';
import { pokedetail } from '../models/pokedetail';
import {PapiService} from '../papi.service';
@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent implements OnInit {
stringToDisplay: string = "Hey";
pokemonToDisplay: pokedetail;

  constructor(private papi: PapiService) { 


  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonToDisplay = this.papi.getDetailPokemon();
  }
}
