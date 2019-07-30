import { Component, OnInit } from '@angular/core';
import { PapiService } from '../papi.service';
import { EvolutionChain } from '../models/EvolutionChain';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
evolutionList: any[] = [];
urlList: string[] = [];

  constructor(private PokeService: PapiService) { }

  ngOnInit() {
    this.getEvolutionChain();
    
  }
  getEvolutionChain() {
    blankArray: [] = [];
    this.PokeService.getEvolutionChain()
    .subscribe(e => {
      let data:any = e;
      data.results.map(evol => {
        this.urlList.push(evol);
      });
      console.log(this.urlList);
    });
  }

}
