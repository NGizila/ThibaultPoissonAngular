import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-recettes-detail',
  templateUrl: './recettes-detail.page.html',
  styleUrls: ['./recettes-detail.page.scss'],
})
export class RecettesDetailPage implements OnInit {
  public item;
  public name;

  constructor(public http: HttpClient, public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params =>{
      if(params && params.special){
        this.item = JSON.parse(params.special);
        console.log(this.item.recette.text);
      }
    });
  }

  ngOnInit() {
  }
}
