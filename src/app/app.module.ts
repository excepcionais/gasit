import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ListaPage } from '../pages/lista/lista';
import { SobrePage } from '../pages/sobre/sobre';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuarioPage } from '../pages/usuario/usuario';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PostosService } from '../providers/postosService'

const firebaseConfig = {
  apiKey: "AIzaSyDbPFuCm8e4mR2A2MZ4Mp2SsvZZZ3ZztM8",
  authDomain: "gasit-e93de.firebaseapp.com",
  databaseURL: "https://gasit-e93de.firebaseio.com",
  projectId: "gasit-e93de",
  storageBucket: "gasit-e93de.appspot.com",
  messagingSenderId: "354549517376"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListaPage,
    CadastroPage,
    SobrePage,
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListaPage,
    CadastroPage,
    SobrePage,
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
