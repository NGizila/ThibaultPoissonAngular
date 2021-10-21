import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionRestaurantPage } from './description-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionRestaurantPageRoutingModule {}
