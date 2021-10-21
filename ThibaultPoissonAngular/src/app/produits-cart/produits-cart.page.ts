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

  async openModal(item: any){
    // const modal = this.modalController.create({component: ModalpopupPage}).then((modalElement)=>{
    //   modalElement.present();
    //   console.log(modalElement);
    // });
    let modal = await this.modalController.create(
      {component: ModalpopupPage}
    );
    modal.onDidDismiss().then((data)=>{
      console.log(data);
    });
    return await modal.present();
  }


  ngOnInit() { }

}
