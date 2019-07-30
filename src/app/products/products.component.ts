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
    console.log('hey');
    this.getPokemon();
  } 
    getPokemon() {
      this.PokemonService.getAllPokemon()
      .subscribe(p => {
        let data:any = p;
        this.pokemonList = data.results;
        this.getUrls();
      });
      console.log(this.PokemonService.offset);
    }
  getUrls() {
    var urlArray: string[] = [];
    this.pokemonList.forEach(p => {
      let data:any = p;
      urlArray.push(data.url);
    });
    this.imageArray = this.PokemonService.getImages(urlArray);
  }
  detail(url: string) {
    this.PokemonService.detailurl = url;
    this.router.navigate(['detail']);
  }
  NextPage(){
    this.PokemonService.NextPage();
    location.reload();
  }
  PrevPage(){
    this.PokemonService.PrevPage();
    location.reload();
  }
  

}

