import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { LocalData } from '../providers/data';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ListaPage } from '../pages/lista/lista';
import { SobrePage } from '../pages/sobre/sobre';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { AlteraPage } from '../pages/altera/altera';
import { UsuarioPage } from '../pages/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListaPage,
    CadastroPage,
    SobrePage,
    DetalhesPage,
    AlteraPage,
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListaPage,
    CadastroPage,
    SobrePage,
    DetalhesPage,
    AlteraPage,
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
