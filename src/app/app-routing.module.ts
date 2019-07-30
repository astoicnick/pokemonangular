import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
