import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
import { HomePage } from '../pages/home/home';
const config = {
  apiKey: 'AIzaSyBrzbUyo1xZdxDatYP5I_gLFPfbvMiFKRM',
  authDomain: 'angularfire-66d7a.firebaseapp.com',
  databaseURL: 'https://angularfire-66d7a.firebaseio.com/',
  projectId: 'angularfire-66d7a',
  storageBucket: 'gs://angularfire-66d7a.appspot.com',
};
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

