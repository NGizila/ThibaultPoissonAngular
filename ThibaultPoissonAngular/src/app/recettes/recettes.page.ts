import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {
  recettes: any;
  constructor(public http: HttpClient, public router: Router){
  
  }
  ngOnInit() {
    this.http.get('../assets/data/recettes_boutons.json').subscribe(res => {
      this.recettes = res;
      console.log(res)
    })
  }
  getRecette(item: any){
    let navigationExtras : NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    console.log(item);
    this.router.navigate(['recettes-detail'],navigationExtras);
}
  

}
