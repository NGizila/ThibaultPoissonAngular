import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionBateauPage } from './description-bateau.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionBateauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionBateauPageRoutingModule {}
