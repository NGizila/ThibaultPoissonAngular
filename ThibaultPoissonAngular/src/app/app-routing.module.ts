import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'produits-list',
    loadChildren: () => import('./produits-list/produits-list.module').then( m => m.ProduitsListPageModule)
  },
  {
    path: 'produits-cart',
    loadChildren: () => import('./produits-cart/produits-cart.module').then( m => m.ProduitsCartPageModule)
  },
  {
    path: 'modalpopup',
    loadChildren: () => import('./modalpopup/modalpopup.module').then( m => m.ModalpopupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
