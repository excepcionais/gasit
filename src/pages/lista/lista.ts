import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { LocalData } from '../../providers/data';

import { CadastroPage } from '../cadastro/cadastro';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  public postos = [];
  private order: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public localData: LocalData
  ){
    this.localData.getData('postos').then((postos) => {

      if(postos){
        this.postos = postos;
      }

    });
  }

  reorderLista() {
    let toast_preco = this.toastCtrl.create({
      message: 'Ordenado por preço.',
      duration: 2000,
      position: 'bottom'
    });

    let toast_distancia = this.toastCtrl.create({
      message: 'Ordenado por distância.',
      duration: 2000,
      position: 'bottom'
    });

    this.order = 1 - this.order;

    if(this.order == 0){
      toast_preco.present(toast_preco);
      //organizar por preço
    }
    else{
      toast_distancia.present(toast_distancia);
      //organizar por preço
    }
  }

  addPosto() {
    //this.navCtrl.push(CadastroPage);
    let addModal = this.modalCtrl.create(CadastroPage);

    addModal.onDidDismiss((posto) => {

      if(posto){
        this.savePosto(posto);
      }

    });

    addModal.present();
  }

  savePosto(posto){
    this.postos.push(posto);
    this.localData.saveData('postos', this.postos);
  }

  showPosto(event, posto){
    this.navCtrl.push(DetalhesPage, {
      posto: posto
    });
  }
}
