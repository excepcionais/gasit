import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToastController, AlertController, ActionSheetController } from 'ionic-angular';
import * as firebase from 'firebase';

@Injectable()
export class StationService {

  items: FirebaseListObservable<any[]>;

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    private afDb: AngularFireDatabase
  ){
    this.items = afDb.list('/stations');
  }

  public getAll() {
    return this.items;
  }

  public getItem(){
    return this.items;
  }

  public getStations(order: number) { //Ordenar por distancia //Filtrar por distancia
    let toast_price = this.toastCtrl.create({
      message: 'Ordenado por preço.',
      duration: 1500,
      position: 'bottom'
    });

    let toast_distance = this.toastCtrl.create({
      message: 'Ordenado por distância.',
      duration: 1500,
      position: 'bottom'
    });

    if(order){
      toast_distance.present(toast_distance);
      this.items = this.afDb.list('/stations', {query: {
        orderByChild: 'nome'           //distancia
      }});
    }
    else{
      toast_price.present(toast_price);
      this.items = this.afDb.list('/stations', {query: {
        orderByChild: 'preco'
      }});
    }

    return this.items;
  }

  public addStation() {  //Editar AlertController pra validar informações //ultima edição //id do rapaz //localização //ID do usuario //Data da atualização
    let prompt = this.alertCtrl.create({
      title: 'Adicionar posto',
      message: "Adicione um posto e suas informações",
      inputs: [
        {
          name: 'name',
          placeholder: 'Nome (Posto JarJour, Posto do Marcelo)'
        },
        {
          name: 'flag',
          placeholder: 'Bandeira (Shell, Ale, BR, JarJour)'
        },
        {
          name: 'local',
          placeholder: 'Descrição Local (CSB 06, Taguatinga Sul, DF)'
        },
        {
          name: 'coord_x',
          placeholder: 'Coordenada X (-15.838991)'
        },
        {
          name: 'coord_y',
          placeholder: 'Coordenada Y (-48.054211)'
        },
        {
          name: 'price',
          placeholder: 'Preço (4,000)'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            const newStationRef = this.items.push({});

            newStationRef.set({
              id: newStationRef.key,
              name: data.name,
              flag: data.flag,
              local: data.local,
              coord_x: data.coord_x,
              coord_y: data.coord_y,
              price: data.price,
              last_date: this.getActualDate(),
              lest_user: this.getActualUser()
            });
          }
        }
      ]
    });

    prompt.present();
  }

  public showOptions(stationId, price) { //Ver no Maps //Alterar Preço
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione uma ação:',
      buttons: [
        {
          text: 'Deletar posto',
          role: 'destructive',
          handler: () => {
            this.removeStation(stationId);
          }
        },{
          text: 'Atualizar preço',
          handler: () => {
            this.updatePrice(stationId, price);
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  public updatePrice(stationId, price){//ID do usuario //Data da atualização //Preço validation
    let prompt = this.alertCtrl.create({
      title: 'Alterar preço',
      message: "Aterar preço de gasolina no posto selecionado",
      inputs: [
        {
          name: 'price',
          placeholder: 'Preço',
          value: price
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.items.update(stationId, {
              price: data.price,
              last_date: this.getActualDate(),
              last_user: this.getActualUser()
            });
          }
        }
      ]
    });
    prompt.present();
  }

  public removeStation(stationId: string) {
    this.items.remove(stationId);
  }

  getActualDate(){ //retornar string "00:00 - 11 Janeiro 2017";
    var time = new Date().getTime(); //var time = firebase.database.ServerValue.TIMESTAMP;
    var date = new Date(time);
    return date.toString();
  }

  getActualUser(){//Get User from Auth Service
    var data: string = "username";
    return data;
  }

}
