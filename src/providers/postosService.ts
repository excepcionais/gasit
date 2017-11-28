import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToastController, AlertController, ActionSheetController } from 'ionic-angular';
import firebase from 'firebase';

@Injectable()
export class PostosService {

  items: FirebaseListObservable<any[]>;

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    private afDb: AngularFireDatabase
  ){
    this.items = afDb.list('/postos');
  }

  public getAll() {
    return this.items;
  }

  public getItem(){
    return this.items;
  }

  public getPostos(order: number) { //Ordenar por distancia //Filtrar por distancia
    let toast_preco = this.toastCtrl.create({
      message: 'Ordenado por preço.',
      duration: 1500,
      position: 'bottom'
    });

    let toast_distancia = this.toastCtrl.create({
      message: 'Ordenado por distância.',
      duration: 1500,
      position: 'bottom'
    });

    if(order){
      toast_distancia.present(toast_distancia);
      this.items = this.afDb.list('/postos', {query: {
        orderByChild: 'nome'           //distancia
      }});
    }
    else{
      toast_preco.present(toast_preco);
      this.items = this.afDb.list('/postos', {query: {
        orderByChild: 'preco'
      }});
    }

    return this.items;
  }

  public addPosto() {  //Editar AlertController pra validar informações //ultima edição //id do rapaz //localização //ID do usuario //Data da atualização
    let prompt = this.alertCtrl.create({
      title: 'Adicionar posto',
      message: "Adicione um posto e suas informações",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome (Posto JarJour, Posto do Marcelo)'
        },
        {
          name: 'bandeira',
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
          name: 'preco',
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
            const newPostoRef = this.items.push({});

            newPostoRef.set({
              id: newPostoRef.key,
              nome: data.nome,
              bandeira: data.bandeira,
              local: data.local,
              coord_x: data.coord_x,
              coord_y: data.coord_y,
              preco: data.preco,
              ultima_data: this.getActualDate(),
              ultima_user: this.getActualUser()
            });
          }
        }
      ]
    });

    prompt.present();
  }

  public showOptions(postoId, postoPreco) { //Ver no Maps //Alterar Preço
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione uma ação:',
      buttons: [
        {
          text: 'Deletar posto',
          role: 'destructive',
          handler: () => {
            this.removePosto(postoId);
          }
        },{
          text: 'Atualizar preço',
          handler: () => {
            this.updatePreco(postoId, postoPreco);
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

  public updatePreco(postoId, postoPreco){//ID do usuario //Data da atualização //Preço validation
    let prompt = this.alertCtrl.create({
      title: 'Alterar preço',
      message: "Aterar preço de gasolina no posto selecionado",
      inputs: [
        {
          name: 'preco',
          placeholder: 'Preço',
          value: postoPreco
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
            this.items.update(postoId, {
              preco: data.preco,
              ultima_data: this.getActualDate(),
              ultima_user: this.getActualUser()
            });
          }
        }
      ]
    });
    prompt.present();
  }

  public removePosto(songId: string) {
    this.items.remove(songId);
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
