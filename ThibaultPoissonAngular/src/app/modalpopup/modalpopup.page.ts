import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {

  constructor(private modalController: ModalController) { }
  private quantityList = [0,1,2,3,4,5];
  private productNumber = 0;
  ngOnInit() {
  }

  setNumber(productNumber: number){
    this.productNumber = productNumber;
  }

  closeModal(productNumber: number){
    this.modalController.dismiss(productNumber);
  }

}
