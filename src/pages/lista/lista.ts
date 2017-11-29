import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostosService } from '../../providers/postos-service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  postos: FirebaseListObservable<any>;
  private order: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postosService: PostosService
  ){
    this.postos = postosService.getAll();
  }

  reorderLista() {
    this.order = 1 - this.order;
    this.postos = this.postosService.getPostos(this.order);
  }

  addPosto(){
    this.postosService.addPosto();
  }

  showOptions(postoId, postoPreco) {
    this.postosService.showOptions(postoId, postoPreco);
  }
}
