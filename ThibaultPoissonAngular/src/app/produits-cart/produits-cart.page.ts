import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-produits-cart',
  templateUrl: './produits-cart.page.html',
  styleUrls: ['./produits-cart.page.scss'],
})
export class ProduitsCartPage implements OnInit {
  private cart = [];
  private cartCounter = {};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(product => {
      console.log(product);
   });
  }

}
