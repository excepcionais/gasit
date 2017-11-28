import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';


import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleplus:GooglePlus, public facebook:Facebook) {

  }

  login(){
    this.googleplus.login({
      'webClientId':'354549517376-lm29fer10k9akl8lmc5g93qhini9uk8d.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        alert("Login efetuado!")
      }).catch(ns=>{
        alert("Login não efetuado!")
      })
    })
  }


  fblogin(){
    this.facebook.login(['email']).then(res=>{
      const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fc).then(fs=>{
        alert("firebase sec")
      }).catch(ferr=>{
        alert("firebase errc")
      })

    }).catch(err=>{
      alert(JSON.stringify(err))
    })
  }

  openPage() {
    this.navCtrl.setRoot(ListaPage);
  }

}
