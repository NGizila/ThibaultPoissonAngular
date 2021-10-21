import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'bateauFournisseurs.page.html',
  styleUrls: ['bateauFournisseurs.page.scss'],
})
export class bateauFournisseurs {
    //noms de bateau a chaque bouton
  row1: string[] = ['De la Brise','Saphir'];
  row2: string[] = ['Gast Micher','Aquilon'];
  row3: string[] = ['Contact','Contact'];
  fullPath: string = '';

  goToPath(pathName :string){
    this.fullPath = "/" + pathName.toLowerCase();
    this.router.navigate([this.fullPath]);
  }

  constructor(private router: Router) {}

}