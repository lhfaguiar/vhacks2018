import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import * as firebase from "firebase";

@IonicPage()
@Component({
  selector: 'help-button',
  templateUrl: 'help-button.html'
})
export class HelpButtonPage {
  constructor(public navCtrl: NavController) {

  }
  val: boolean = false;

  ionViewDidEnter(){  
    this.val = false;
  }

  askHelp(){
    var pending = firebase.database().ref('pending_help');
    var accepted = firebase.database().ref('accepted_help');
    pending.push({"name": "Fadi El Didi", "position":"12345"});
    accepted.on("value", result=>{

      if(this.val)
        this.navCtrl.push("LoclasPessoasPage");
      this.val = true;
    })
  }
}
