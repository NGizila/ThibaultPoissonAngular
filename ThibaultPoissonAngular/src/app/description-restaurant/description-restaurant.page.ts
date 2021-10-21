import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-description-restaurant',
  templateUrl: './description-restaurant.page.html',
  styleUrls: ['./description-restaurant.page.scss'],
})
export class DescriptionRestaurantPage implements OnInit {

  restaurantName: any;
  urlImage: string;

  constructor(private route: ActivatedRoute, private router: Router)
  {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.restaurantName = this.router.getCurrentNavigation().extras.state.restaurantName;

        switch(this.restaurantName)
        {
          case 'Bistrot des Gascons' :  this.urlImage = '../../assets/restaurants/desGascons.png';
                                        break;
          case 'Les fous de l\'îles' : this.urlImage = '../../assets/restaurants/fousDeLIle.png';
                                      break;
          case 'Bistrot Landais' :  this.urlImage = '../../assets/restaurants/bistrotLandais.png';
                                    break;
          case 'Villa 9-trois' :  this.urlImage = '../../assets/restaurants/villa9Trois.png';
                                  break;
          case 'Bistrot du Sommelier':  this.urlImage = '../../assets/restaurants/duSommelier.png';
                                        break;
        }
      }
    });
  }

  ngOnInit() {
  }

}
