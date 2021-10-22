import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerantPage } from './gerant.page';

const routes: Routes = [
  {
    path: '',
    component: GerantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerantPageRoutingModule {}
