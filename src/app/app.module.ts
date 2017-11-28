import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListaPage } from '../pages/lista/lista';
import { SobrePage } from '../pages/sobre/sobre';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

export const firebaseConfig={
  apiKey: "AIzaSyDbPFuCm8e4mR2A2MZ4Mp2SsvZZZ3ZztM8",
    authDomain: "gasit-e93de.firebaseapp.com",
    databaseURL: "https://gasit-e93de.firebaseio.com",
    projectId: "gasit-e93de",
    storageBucket: "gasit-e93de.appspot.com",
    messagingSenderId: "354549517376"
}
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListaPage,
    CadastroPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListaPage,
    CadastroPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    Facebook
  ]
})
export class AppModule {}
