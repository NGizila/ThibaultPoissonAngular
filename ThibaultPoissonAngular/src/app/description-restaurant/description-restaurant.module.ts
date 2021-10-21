import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionRestaurantPageRoutingModule } from './description-restaurant-routing.module';

import { DescriptionRestaurantPage } from './description-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionRestaurantPageRoutingModule
  ],
  declarations: [DescriptionRestaurantPage]
})
export class DescriptionRestaurantPageModule {}
