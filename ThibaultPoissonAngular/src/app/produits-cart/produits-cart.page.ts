import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';

@Component({
  selector: 'app-produits-cart',
  templateUrl: './produits-cart.page.html',
  styleUrls: ['./produits-cart.page.scss'],
})
export class ProduitsCartPage implements OnInit {
  private cartList: any;
  private test: number;

  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.cartList = JSON.parse(params.special);
        console.log(this.cartList);
      }
    });
  }

  totalPrice(quantity: number,price: number){
    return quantity*price;
  }

  deleteProduct(item: any, numberOfItems: number){
    if(item.numberOfItems > numberOfItems){
      item.numberOfItems = item.numberOfItems - numberOfItems;
    }else{
       let index: number = this.cartList.indexOf(item);
       if(index > -1){
        this.cartList.splice(index,1);
       }
    } 
    

  }

  addProduct(item: any, numberOfItems: number){
    item.numberOfItems = item.numberOfItems + numberOfItems;
  }

  async openModal(item: any){
    let modal = await this.modalController.create(
      {component: ModalpopupPage}
    );
    modal.onDidDismiss().then((data)=>{
      console.log(data);
      if(data.role == "add"){
        this.addProduct(item,data.data);
      }
      else if(data.role == "delete"){
        this.deleteProduct(item,data.data);
      }
    });

    console.log(item.numberOfItems);
    return await modal.present();
  }


  ngOnInit() { }

}
