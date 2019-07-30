import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { PapiService } from '../papi.service';
import { pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
pokemonList: Observable<pokemon[]>;
imageArray: string[] = [];

  constructor(private PokemonService: PapiService, private router: Router) { }  

  ngOnInit() {
<<<<<<< HEAD
<<<<<<< Updated upstream
  console.log(this.PokemonService.getAllPokemon())
=======
    this.imageArray = [];
    this.pokemonList = [];
    console.log('hey');
=======
>>>>>>> 7e767d97ecffa6eacfb7dac0dffdc26bd57823a7
    this.getPokemon();
  }
  getPokemon() {
    this.PokemonService.getAllPokemon()
    .subscribe(p => { 
      this.pokemonList = p.results;
      this.getUrls();
    });
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 7e767d97ecffa6eacfb7dac0dffdc26bd57823a7
  }
  getUrls() {
    var urlArray: string[] = [];
    this.pokemonList.forEach(p => {
      urlArray.push(p.url);
    });
    this.imageArray = this.PokemonService.getImages(urlArray);
  }
  detail(url: string) {
    this.PokemonService.detailurl = url;
    this.router.navigate(['detail']);
  }
  

}

