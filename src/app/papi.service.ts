import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import{ pokedetail } from './models/pokedetail';
import { pokemon } from './models/pokemon';
import 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EvolutionChain } from './models/EvolutionChain';

@Injectable({
  providedIn: 'root'
})
export class PapiService {
offset: number = Number(localStorage.getItem("offset"));
evolutionOffset: number = Number(localStorage.getItem("evolutionOffset"));
url = `https://pokeapi.co/api/v2/`;
detailurl: string = localStorage.getItem("detailurl");
pokedetailvar: pokedetail = {
  id: 0,
  name: "",
  ability : "",
  ability2 : "",
  type : "",
  spritefront: "",
  pokedexdescription: "",
  pokedexurl: `https://pokeapi.co/api/v2/pokemon-species`
};
pokemonvar: Observable<pokemon[]>;

  constructor(private http: HttpClient) {
   }
   getDetailPokemon(url: string): pokedetail{
    localStorage.setItem("detailurl", url);
     var request:any;
     request = this.http.get(`${url}`);
     request.subscribe(p =>{
      this.pokedetailvar.name = p.forms[0].name;
      this.pokedetailvar.ability = p.abilities[0].ability.name;
      this.pokedetailvar.ability2 = p.abilities[1].ability.name;
      this.pokedetailvar.type = p.types[0].type.name;
      this.pokedetailvar.spritefront = p.sprites.front_default;
      this.pokedetailvar.id = p.id;
      
      request = this.http.get(`${this.pokedetailvar.pokedexurl}/${this.pokedetailvar.id}`);
      request.subscribe(p=>{
        p.flavor_text_entries.forEach(flavor_text => {
          if (flavor_text.language.name == "en") {
            this.pokedetailvar.pokedexdescription  = flavor_text.flavor_text;
          }
        });
      })
      
     })
    return this.pokedetailvar;
     
   }
   getAllPokemon(): Observable<pokemon[]> {
    return this.http.get<[]>(`${this.url}pokemon?offset=${this.offset}&limit=100`);
   }
   getEvolutionChain(): Observable<EvolutionChain[]> {
     console.log(this.evolutionOffset);
     return this.http.get<[]>(`${this.url}evolution-chain?offset=${this.evolutionOffset}&limit=5`);
   }
    getImages(urls: string[]): string[] {
      var imageArray: string[] = [];
      urls.forEach(url => {
        this.http.get(`${url}`)
        .subscribe(s => {
          let data:any = s;
          imageArray.push(data.sprites.front_default);
        });
      });
      return imageArray;
    }
    NextPage() {
      var offsetNumber = Number(localStorage.getItem("offset"));
      offsetNumber +=  100;
      localStorage.setItem("offset", String(offsetNumber));
    }
  PrevPage() {
    var offsetNumber = Number(localStorage.getItem("offset"));
      offsetNumber -=  100;
      localStorage.setItem("offset", String(offsetNumber));
  }
  NextEvolutionPage() {
    var offsetNumber = Number(localStorage.getItem("evolutionOffset"));
      offsetNumber +=  5;
      localStorage.setItem("evolutionOffset", String(offsetNumber));
  }
  PrevEvolutionPage() {
    var offsetNumber = Number(localStorage.getItem("evolutionOffset"));
      offsetNumber +-  5;
      localStorage.setItem("evolutionOffset", String(offsetNumber));
  }
}
