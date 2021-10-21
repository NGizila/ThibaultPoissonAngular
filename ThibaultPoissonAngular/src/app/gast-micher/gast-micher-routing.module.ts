import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastMicherPage } from './gast-micher.page';

const routes: Routes = [
  {
    path: '',
    component: GastMicherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastMicherPageRoutingModule {}
