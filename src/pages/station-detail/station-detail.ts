import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { StationService } from '../../providers/station-service';

import { PriceUpdatePage } from '../price-update/price-update';

@Component({
  selector: 'station-detail',
  templateUrl: 'station-detail.html'
})
export class StationDetailPage {

  station: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public stationServ: StationService
  ) {
    this.station = navParams.get('station'); //pegar do servidor
  }

  updatePrice() {
    let addModal = this.modalCtrl.create(PriceUpdatePage);

    addModal.onDidDismiss((newPrice) => {
      if(newPrice){
        this.stationServ.updatePrice(this.station.id, newPrice)
        this.station.price = newPrice; //gambiarra
      }
    });

    addModal.present();
  }

}
