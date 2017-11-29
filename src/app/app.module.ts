import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation'

import { MyApp } from './app.component';

import { UserLoginPage }     from '../pages/user-login/user-login';
import { UserDetailPage }    from '../pages/user-detail/user-detail';
import { StationListPage }   from '../pages/station-list/station-list';
import { StationDetailPage } from '../pages/station-detail/station-detail';
import { PriceUpdatePage }   from '../pages/price-update/price-update';
import { AboutUsPage }       from '../pages/about-us/about-us';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StationService }      from '../providers/station-service';
import { ConnectivityService } from '../providers/connectivity-service';
import { GeographicService } from '../providers/geographic-service';

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
    UserLoginPage,
    UserDetailPage,
    StationListPage,
    StationDetailPage,
    PriceUpdatePage,
    AboutUsPage
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
    UserLoginPage,
    UserDetailPage,
    StationListPage,
    StationDetailPage,
    PriceUpdatePage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Geolocation,
    StationService,
    ConnectivityService,
    GeographicService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
