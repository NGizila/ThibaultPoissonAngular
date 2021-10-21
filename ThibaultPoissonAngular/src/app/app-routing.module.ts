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
  },  {
    path: 'bateau-information',
    loadChildren: () => import('./bateau-information/bateau-information.module').then( m => m.BateauInformationPageModule)
  },
  {
    path: 'bateaudisplay',
    loadChildren: () => import('./bateaudisplay/bateaudisplay.module').then( m => m.BateaudisplayPageModule)
  },
  {
    path: 'delabrise',
    loadChildren: () => import('./delabrise/delabrise.module').then( m => m.DelabrisePageModule)
  },
  {
    path: 'saphir',
    loadChildren: () => import('./saphir/saphir.module').then( m => m.SaphirPageModule)
  },
  {
    path: 'gast-micher',
    loadChildren: () => import('./gast-micher/gast-micher.module').then( m => m.GastMicherPageModule)
  },
  {
    path: 'aquilon',
    loadChildren: () => import('./aquilon/aquilon.module').then( m => m.AquilonPageModule)
  },
  {
    path: 'default',
    loadChildren: () => import('./default/default.module').then( m => m.DefaultPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
