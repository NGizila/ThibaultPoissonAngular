import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesDetailPageRoutingModule } from './recettes-detail-routing.module';

import { RecettesDetailPage } from './recettes-detail.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesDetailPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [RecettesDetailPage]
})
export class RecettesDetailPageModule {}
