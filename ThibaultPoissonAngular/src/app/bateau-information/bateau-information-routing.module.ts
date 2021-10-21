import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauInformationPage } from './bateau-information.page';

const routes: Routes = [
  {
    path: '',
    component: BateauInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauInformationPageRoutingModule {}
