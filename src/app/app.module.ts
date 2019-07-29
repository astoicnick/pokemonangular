import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { matImports } from './matImports';

@NgModule({
  declarations: [
    AppComponent,
    PokemondetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    matImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
