import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';

@Injectable()
export class ConnectivityService {

  connected: boolean;

  constructor(
    public platform: Platform,
    public network: Network
  ){
    platform.ready().then(() => {
      this.checkConnection();
      this.network.onDisconnect().subscribe(() => this.isOffline());
      this.network.onConnect().subscribe(() => this.isOnline());
    });
  }

  getStatus(){
    return this.connected;
  }

  checkConnection(){
    if (this.network.type === 'none') {
      this.isOffline();
    } else {
      this.isOnline();
    }
  }

  isOffline(){
    this.connected = false;
    console.log("offline");
  }

  isOnline(){
    this.connected = true;
    console.log("online");
  }
}
