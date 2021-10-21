import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauInformationPageRoutingModule } from './bateau-information-routing.module';

import { BateauInformationPage } from './bateau-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauInformationPageRoutingModule
  ],
  declarations: [BateauInformationPage]
})
export class BateauInformationPageModule {}
