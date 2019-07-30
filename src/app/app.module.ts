import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { matImports } from './matImports';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemondetailComponent,
    ProductsComponent,
    AboutComponent,
    EvolutionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    matImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
