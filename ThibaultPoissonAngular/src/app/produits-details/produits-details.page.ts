import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.page.html',
  styleUrls: ['./produits-details.page.scss'],
})
export class ProduitsDetailsPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(product => {
      console.log(product);
   });
  }

}
