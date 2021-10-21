import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsCartPageRoutingModule } from './produits-cart-routing.module';

import { ProduitsCartPage } from './produits-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsCartPageRoutingModule
  ],
  declarations: [ProduitsCartPage]
})
export class ProduitsCartPageModule {}
