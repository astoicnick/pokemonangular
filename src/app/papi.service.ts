import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import{pokedetail} from './models/pokedetail';

@Injectable({
  providedIn: 'root'
})
export class PapiService {
url = `https://pokeapi.co/api/v2/`;
pokedetailvar: pokedetail = {

  name: "",
  ability : "",
  ability2 : "",
  type : "",
  spritefront: "",
  pokedexdescription: "",
  pokedexurl: `https://pokeapi.co/api/v2/pokemon-species`
};

  constructor(private http: HttpClient) {

   }
   getDetailPokemon(): pokedetail{
     var pokemon = "mudkip";
     var request:any;
     request = this.http.get(`${this.url}pokemon/${pokemon}`);
     request.subscribe(p =>{
      this.pokedetailvar.name = p.forms[0].name;
      this.pokedetailvar.ability = p.abilities[0].ability.name;
      this.pokedetailvar.ability2 = p.abilities[1].ability.name;
      this.pokedetailvar.type = p.types[0].type.name;
      this.pokedetailvar.spritefront = p.sprites.front_default;
      
      request = this.http.get(`${this.pokedetailvar.pokedexurl}/258`);
      request.subscribe(p=>{
        this.pokedetailvar.pokedexdescription = p.flavor_text_entries[1].flavor_text;
      })
      
     })
     
    return this.pokedetailvar;
     
   }
}
