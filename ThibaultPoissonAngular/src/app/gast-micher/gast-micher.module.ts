import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastMicherPageRoutingModule } from './gast-micher-routing.module';

import { GastMicherPage } from './gast-micher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastMicherPageRoutingModule
  ],
  declarations: [GastMicherPage]
})
export class GastMicherPageModule {}
