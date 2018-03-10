import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as firebase from "firebase";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  askHelp(){
    var pending = firebase.database().ref('pending_help');
    pending.push({"name": "Leonardo", "position":"12345"});
  }
}
