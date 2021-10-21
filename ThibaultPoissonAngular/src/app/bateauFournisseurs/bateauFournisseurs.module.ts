import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from 'src/app/home/home.page';
import { bateauFournisseurs } from 'src/app/bateauFournisseurs/bateauFournisseurs.page';
import { HomePageRoutingModule } from 'src/app/home/home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    bateauFournisseurs
  ],
  declarations: [bateauFournisseurs]
})
export class bateauFournisseurModule {}
