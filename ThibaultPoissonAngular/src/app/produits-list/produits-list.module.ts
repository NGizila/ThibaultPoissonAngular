import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsListPageRoutingModule } from './produits-list-routing.module';

import { ProduitsListPage } from './produits-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsListPageRoutingModule
  ],
  declarations: [ProduitsListPage]
})
export class ProduitsListPageModule {}
