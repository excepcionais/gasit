import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'

import { FirebaseListObservable } from 'angularfire2/database';

import { StationService }         from '../../providers/station-service';
import { GeographicService }         from '../../providers/geographic-service';

import { StationDetailPage } from '../station-detail/station-detail';

@Component({
  selector: 'station-list',
  templateUrl: 'station-list.html'
})
export class StationListPage {

  length: number;
  stations: FirebaseListObservable<any>;
  private order: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private stationServ: StationService,
    private geoServ: GeographicService
  ){
    this.stations = this.stationServ.getStations(this.order);
    //this.length = this.getListLenght(),

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

  getAllDistances(){ //wrong
    this.geolocation.getCurrentPosition().then(resp => {
      for(let i = 0; i < this.length; i++){
        let station = this.stations[i];

        station.distance = this.getDistance(
          resp.coords.latitude,
          resp.coords.longitude,
          station.latitude,
          station.longitude
        );
      }
    });
  }

  getDistance1(){
    this.geolocation.getCurrentPosition().then(resp => {
      this.stations[1].distance = this.getDistance(
        resp.coords.latitude,
        resp.coords.longitude,
        this.stations[1].latitude,
        this.stations[1].longitude
      );
    });
  }

  getDistance(lat1, lon1, lat2, lon2){
    let distance = this.geoServ.getDistance(lat1, lon1, lat2, lon2);
    return distance;
  }

  getListLenght(){ //wrong
    let x: number = 0;
    this.stations.subscribe(result => {x = result.length});
    console.log(x);
    return x;
  }

}
