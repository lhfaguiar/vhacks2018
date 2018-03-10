import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";

/**
 * Generated class for the HelpcallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpcall',
  templateUrl: 'helpcall.html',
})
export class HelpcallPage {

  userData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = navParams.get("data");
  }


  accept(){
    var accepted = firebase.database().ref('accepted_help');
    this.navCtrl.setRoot("HomePage");
    accepted.push(Math.random());
  }
  
  reject(){
    this.navCtrl.setRoot("HomePage");
  }

}
