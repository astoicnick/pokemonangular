import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import{ pokedetail } from './models/pokedetail';
import { pokemon } from './models/pokemon';
import 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PapiService {
url = `https://pokeapi.co/api/v2/`;
detailurl: string = "";
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
    this.detailurl = url;
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
        this.pokedetailvar.pokedexdescription = p.flavor_text_entries[1].flavor_text;
      })
      
     })
    return this.pokedetailvar;
     
   }
   getAllPokemon(): Observable<pokemon[]> {
    return this.http.get<[]>(`${this.url}pokemon`);
   }
   getImages(urls: string[]): string[] {
    var imageArray: string[] = [];
    urls.forEach(url => {
      var blank = this.http.get<string>(`${url}`)
      .subscribe(s => {
        imageArray.push(s.sprites.front_default);
      })
    });
    return imageArray;
  }
}
