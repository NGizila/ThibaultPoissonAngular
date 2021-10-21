import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits-cart',
  templateUrl: './produits-cart.page.html',
  styleUrls: ['./produits-cart.page.scss'],
})
export class ProduitsCartPage implements OnInit {
  private cartList: any;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.cartList = JSON.parse(params.special);
        console.log(this.cartList);
      }
    });
  }

  ngOnInit() { }

}
