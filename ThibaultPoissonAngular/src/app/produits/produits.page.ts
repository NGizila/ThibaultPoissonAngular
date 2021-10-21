import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as JSONdata from "../../constants/produits.json";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {
  productList =  [];
  itemData = [];
  productsCategories = ['Poissons','Coquillages','Crustaces','Promotions'];

  constructor(private router: Router) { }

  redirect(data: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    };
    this.router.navigate(['produits-list'],navigationExtras);
  }

  
  filterData(name: string){
    let data: any;
    if(name.toLowerCase() == 'poissons'){
      data = Object.values(this.productList).filter(value=>value.category==0);
    }
    else if(name.toLowerCase() == 'coquillages'){
      data = Object.values(this.productList).filter(value=>value.category==1);
    }
    else if(name.toLowerCase() == 'crustaces'){
      data = Object.values(this.productList).filter(value=>value.category==2);
    } else{
      data = Object.values(this.productList).filter(value=>value.discount!=0);
    }
    this.redirect(data);
  }
  
  ngOnInit() {
    this.productList = JSONdata;
  }

}
