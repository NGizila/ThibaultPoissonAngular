import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesDetailPage } from './recettes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesDetailPageRoutingModule {}
