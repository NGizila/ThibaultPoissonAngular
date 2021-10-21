import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Cart } from '../models/Cart';
@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.page.html',
  styleUrls: ['./produits-list.page.scss'],
})
export class ProduitsListPage implements OnInit {
  productList: any;
  cart: Cart = new Cart();
  itemCounter = 0;
  itemData = [];


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.productList = JSON.parse(params.special);
        console.log(this.productList);
      }
    });
   }
  
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

  redirectHome(){
    this.router.navigate(['home']);
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
  }

}
