import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  row1: string[] = ['Produits'];
  row2: string[] = ['Bateau','Restaurant'];
  row3: string[] = ['Promotion','Contacte'];
  fullPath: string = '';

  goToPath(pathName :string){
    this.fullPath = "/" + pathName.toLowerCase();
    this.router.navigate([this.fullPath]);
  }

  constructor(private router: Router) {}

}
