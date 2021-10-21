import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionBateauPageRoutingModule } from './description-bateau-routing.module';

import { DescriptionBateauPage } from './description-bateau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionBateauPageRoutingModule
  ],
  declarations: [DescriptionBateauPage]
})
export class DescriptionBateauPageModule {}
