import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-description-bateau',
  templateUrl: './description-bateau.page.html',
  styleUrls: ['./description-bateau.page.scss'],
})
export class DescriptionBateauPage implements OnInit {
  bateauName: any;
  urlImage: string;

  constructor(private route: ActivatedRoute, private router: Router)
  {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state)
      {
        this.bateauName = this.router.getCurrentNavigation().extras.state.bateauName;
        console.log(this.bateauName);

        switch (this.bateauName)
        {
          case 'De la Brise' : this.urlImage = '../../assets/bateaux/deLaBrise.png';
                                        break;
          case 'Saphir' : this.urlImage = '../../assets/bateaux/saphir.png';
                                      break;
          case 'Ghast Micher' : this.urlImage = '../../assets/bateaux/gastMicher.png';
                                    break;
          case 'Aquillon' :  this.urlImage = '../../assets/bateaux/aquilon.png';
                                  break;
        }
      }
    });
  }

  ngOnInit() {
  }
}
