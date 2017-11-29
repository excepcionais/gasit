import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';

declare var Connection;

@Injectable()
export class ConectividadeService {

  conectado: boolean;

  constructor(
    public platform: Platform,
    public network: Network
  ){
    platform.ready().then(() => {
      this.checkConexao();
      this.network.onDisconnect().subscribe(() => this.isOffline());
      this.network.onConnect().subscribe(() => this.isOnline());
    });
  }

  getStatus(){
    return this.conectado;
  }

  checkConexao(){
    if (this.network.type === 'none') {
      this.isOffline();
    } else {
      this.isOnline();
    }
  }

  isOffline(){
    this.conectado = false;
    console.log("offline");
  }

  isOnline(){
    this.conectado = true;
    console.log("online");
  }
}
