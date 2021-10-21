import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})

export class BateauxPage implements OnInit {

  row1: string[] = ['De la Brise','Saphir'];
  row2: string[] = ['Ghast Micher','Aquillon'];
  row3: string[] = ['Contact','Contact'];
  fullPath = '';

  constructor(private router: Router) {}

  goToBateauDescription(value: string)
  {
    if (value === 'Contact')
    {
      this.router.navigate(['home']);
    }
    else
    {
      const navigationExtras: NavigationExtras = {
        state: {
          bateauName: value
        }
      };
      this.router.navigate(['/description-bateau'], navigationExtras);
    }

  }

  ngOnInit() {
  }

}
