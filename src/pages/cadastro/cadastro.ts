import { Component } from '@angular/core';
import { NavController, ViewController, Platform, ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage { //Não utilizado, usar Validators como base

  postoForm: FormGroup;

  submitAttempt: boolean = false;

  nome: string;
  local: string;
  bandeira: string;
  preco: number;

  constructor(
    public navCtrl: NavController,
    public view: ViewController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public formBuilder: FormBuilder
  ){
    this.postoForm = formBuilder.group({
      nome: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      local: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
  //    bandeira: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      bandeira: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5), Validators.required])]
      //name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])] //PERMITIR ACENTUAÇÕES
    });
  }

  savePosto(){
    this.submitAttempt = true;
    if(!this.postoForm.valid){
      console.log("Erro, algo invalido");
    } else {
      let newPosto = {
        nome: this.nome,
        local: this.local,
        bandeira: this.bandeira,
        preco: this.preco
      };

      this.view.dismiss(newPosto);
    }
  }

  close(){
    this.view.dismiss();
  }

}
