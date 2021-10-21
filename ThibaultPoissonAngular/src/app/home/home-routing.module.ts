import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { bateauFournisseurs } from 'src/app/bateauFournisseurs/bateauFournisseurs.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'bateauFournisseurs',
    component: bateauFournisseurs,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
