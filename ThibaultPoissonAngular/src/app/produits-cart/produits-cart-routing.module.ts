import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitsCartPage } from './produits-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitsCartPageRoutingModule {}
