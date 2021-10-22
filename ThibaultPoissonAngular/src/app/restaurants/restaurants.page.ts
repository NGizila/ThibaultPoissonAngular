import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})

export class RestaurantsPage implements OnInit {

  row1: string[] = ['Bistrot des Gascons','Les fous de l\'îles'];
  row2: string[] = ['Bistrot Landais','Villa 9-trois'];
  row3: string[] = ['Bistrot du Sommelier','Devenez partenaire!'];
  fullPath = '';

  constructor(private router: Router) {}

  goToRestaurantDescription(value: string)
  {
    if (value === 'Devenez partenaire!')
    {
      this.router.navigate(['gerant']);
    }
    else
    {
      const navigationExtras: NavigationExtras = {
        state: {
          restaurantName: value
        }
      };
      this.router.navigate(['/description-restaurant'], navigationExtras);
    }

  }

  ngOnInit() {
  }

}
