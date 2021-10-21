import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';

@Component({
  selector: 'app-produits-cart',
  templateUrl: './produits-cart.page.html',
  styleUrls: ['./produits-cart.page.scss'],
})
export class ProduitsCartPage implements OnInit {
  private cartList: any;

  constructor(private router: Router, private alertController: AlertController, private activatedRoute: ActivatedRoute, private modalController: ModalController) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.cartList = JSON.parse(params.special);
        console.log(this.cartList);
      }
    });
  }
  

  itemPrice(quantity: number,price: number){
    return quantity*price;
  }

  total(){
    let total = 0;
    this.cartList.map(value =>{
      total = total + value.numberOfItems*value.price;
    });
    return total;
  }

  redirectHome(){
    this.router.navigate(['home']);
  }
  
  async validateOrder(total :number) {
    const alert = await this.alertController.create({
      cssClass: 'global.scss',
      header: 'Envoyer votre command?',
      message: 'Envoyer votre command de ' + total + ' € à Thibault?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Oui',
          handler: () => {
            this.cartList = [];
            this.redirectHome();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
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
