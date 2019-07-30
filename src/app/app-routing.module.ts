import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
<<<<<<< Updated upstream


const routes: Routes = [];
=======
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'evolution', component: EvolutionComponent},
  {path: 'detail', component: PokemondetailComponent}
];
>>>>>>> Stashed changes
=======
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { PokemondetailComponent } from './pokemondetail/pokemondetail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'evolution', component: EvolutionComponent},
  {path:  'detail', component: PokemondetailComponent}
];
>>>>>>> 7e767d97ecffa6eacfb7dac0dffdc26bd57823a7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
