import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PapiService } from '../papi.service';
import { pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
pokemonList: Observable<pokemon[]>;
imageArray: string[] = [];

  constructor(private PokemonService: PapiService) { }  

  ngOnInit() {
    this.getPokemon();
  }
  getPokemon() {
    var blank: [];
    this.PokemonService.getAllPokemon()
    .subscribe(p => { 
      this.pokemonList = p.results;
      this.getUrls();
    });

  }
  getUrls() {
    var urlArray: string[] = [];
    this.pokemonList.forEach(p => {
      urlArray.push(p.url);
    });
    this.imageArray = this.PokemonService.getImages(urlArray);
    console.log(this.imageArray);
  }
  

}
