import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerantPageRoutingModule } from './gerant-routing.module';

import { GerantPage } from './gerant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerantPageRoutingModule
  ],
  declarations: [GerantPage]
})
export class GerantPageModule {}
