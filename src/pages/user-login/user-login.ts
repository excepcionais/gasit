import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConnectivityService } from '../../providers/connectivity-service';

import { StationListPage }   from '../station-list/station-list';

@Component({
  selector: 'user-login',
  templateUrl: 'user-login.html'
})
export class UserLoginPage {

  constructor(
    public navCtrl: NavController,
    private connectServ: ConnectivityService
  ){

  }

  openPage() {
    if(this.connectServ.getStatus()) {
      this.navCtrl.setRoot(StationListPage);
    } else {
      alert("Sem conexão");
    }
  }

}
