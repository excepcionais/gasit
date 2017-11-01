import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlteraPage } from '../altera/altera';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {

  posto: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.posto = navParams.get('posto');
  }

  editPreco() {
    this.navCtrl.push(AlteraPage);
  }

}
