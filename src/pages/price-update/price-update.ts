import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'price-update',
  templateUrl: 'price-update.html'
})
export class PriceUpdatePage {

  stationForm: FormGroup;
  submitAttempt: boolean = false;

  price: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    public formBuilder: FormBuilder
  ) {
    this.stationForm = formBuilder.group({
      price: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5), Validators.required])] //Melhorar validação
    });
  }

  updatePrice(){
    this.submitAttempt = true;
    if(!this.stationForm.valid){
      console.log("Erro, algo invalido");
    } else {
      this.view.dismiss(this.price);
    }
  }

  closeUpdate(){
    this.view.dismiss();
  }

}
