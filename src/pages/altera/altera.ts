import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-altera',
  templateUrl: 'altera.html'
})
export class AlteraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  }

}
