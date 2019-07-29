import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent implements OnInit {
stringToDisplay: string = "Hey";
  constructor() { }

  ngOnInit() {
  }

}
