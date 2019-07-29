import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import{ pokedetail } from './models/pokedetail';
import { pokemon } from './models/pokemon';
import 'rxjs';
import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class PapiService {
url = `https://pokeapi.co/api/v2/`;
pokedetailvar: pokedetail = {

  name: "",
  ability : "",
  ability2 : "",
  type : ""
};
pokemonvar: pokemon[] = [];
blankpokevar: [];
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
     })
     
    return this.pokedetailvar;
     
   }
   getAllPokemon(): []{
    var req:any[];
    var res = this.http.get<pokemon[]>(`${this.url}pokemon`)
    .subscribe(poke=> {
      this.blankpokevar = poke.results;
      console.log(this.blankpokevar);
      return this.blankpokevar
    });
    return this.blankpokevar;
   }
}
