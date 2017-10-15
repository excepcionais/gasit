import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openCadastro() {
    this.navCtrl.push(CadastroPage);
  }

  reorderLista() {
    //re-ordenar a Lista
  }

}
