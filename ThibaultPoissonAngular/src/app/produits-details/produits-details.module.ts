import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsDetailsPageRoutingModule } from './produits-details-routing.module';

import { ProduitsDetailsPage } from './produits-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsDetailsPageRoutingModule
  ],
  declarations: [ProduitsDetailsPage]
})
export class ProduitsDetailsPageModule {}
