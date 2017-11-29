import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StationService }         from '../../providers/station-service';
import { FirebaseListObservable } from 'angularfire2/database';

import { StationDetailPage } from '../station-detail/station-detail';

@Component({
  selector: 'station-list',
  templateUrl: 'station-list.html'
})
export class StationListPage {

  stations: FirebaseListObservable<any>;
  private order: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private stationServ: StationService
  ){
    this.stations = this.stationServ.getStations(this.order);
  }

  orderList() {
    this.order = 1 - this.order;
    this.stations = this.stationServ.getStations(this.order);
  }

  addStation(){
    this.stationServ.addStation();
  }

  openStation(station){
    this.navCtrl.push(StationDetailPage, {
      station: station
    });
  }


}
