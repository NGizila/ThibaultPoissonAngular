import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as JSONdata from "../../constants/produits.json";
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {
  
  constructor(private router: Router,private modalCtrl: ModalController) { }
  productList: any;
  cart: Cart = new Cart();
  itemCounter = 0;
  itemData = [];

  manageItems(item: any){
    let counter = 0;
    let id_exists = false;
    let simplecart: Cart = new Cart();

    if(this.itemData.length < 1){
      this.cart.id = item.id;
      this.cart.name = item.name;
      this.cart.numberOfItems = 1;
      this.cart.price = item.price;
      this.itemData.push(this.cart);
    }
    else{
      this.itemData.forEach(element => {
        if(item.id == element.id){
          id_exists = true;
          counter = element.numberOfItems + 1;
          element.numberOfItems = element.numberOfItems +1;
        }});
  
      if(id_exists==false){
          simplecart.id = item.id;
          simplecart.name = item.name;
          simplecart.numberOfItems = 1;
          simplecart.price = item.price;
          this.itemData.push(simplecart);
        }
    }
  }
  
  getCounter(item:number){
    let counter = 0;
    this.itemData.forEach(element => {
      if(item == element.id){
        counter = element.numberOfItems;
      }
    })
    return counter;
  }

  redirect(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.itemData)
      }
    };
    this.router.navigate(['produits-cart'], navigationExtras); //,{state:{data:{...item}}}
  }

  ngOnInit() {
    this.productList = JSONdata;
  }

}
