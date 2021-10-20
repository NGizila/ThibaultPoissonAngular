import { Component, OnInit } from '@angular/core';
import * as JSONdata from "../../constants/produits.json";
import { Products } from '../models/Products';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  products: Products = new Products();
  test: [] = [];
  constructor() { }
  productList: any;

  redirect(item: string){
    console.log(item);
  }

  ngOnInit() {
    this.productList = JSONdata;

  }

}
