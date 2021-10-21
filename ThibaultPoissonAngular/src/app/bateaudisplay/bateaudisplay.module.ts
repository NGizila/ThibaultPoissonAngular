import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateaudisplayPageRoutingModule } from './bateaudisplay-routing.module';

import { BateaudisplayPage } from './bateaudisplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateaudisplayPageRoutingModule
  ],
  declarations: [BateaudisplayPage]
})
export class BateaudisplayPageModule {}
