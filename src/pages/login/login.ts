import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListaPage } from '../lista/lista';

import { ConectividadeService } from '../../providers/conectividade-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private conecServ: ConectividadeService
  ){

  }

  openPage() {
    if(this.conecServ.getStatus()) {
      this.navCtrl.setRoot(ListaPage);
    } else {
      alert("Sem conexão");
    }
  }

}
