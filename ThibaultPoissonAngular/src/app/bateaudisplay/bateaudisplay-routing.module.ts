import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateaudisplayPage } from './bateaudisplay.page';

const routes: Routes = [
  {
    path: '',
    component: BateaudisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateaudisplayPageRoutingModule {}
