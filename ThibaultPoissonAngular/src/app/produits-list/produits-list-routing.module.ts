import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitsListPage } from './produits-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitsListPageRoutingModule {}
