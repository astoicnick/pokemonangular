import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { EvolutionComponent } from './evolution/evolution.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'evolution', component: EvolutionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
