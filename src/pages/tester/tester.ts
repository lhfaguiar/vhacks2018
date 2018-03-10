import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import * as firebase from "firebase";
import { AvailabilityProvider } from '../../providers/availability/availability';

/**
 * Generated class for the TesterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tester',
  templateUrl: 'tester.html',
})
export class TesterPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public availability: AvailabilityProvider,
    public events: Events
  ) {
    this.subscribeToEvents();
  }

  feature(){
    if(!this.availability._available){
      this.availability.available();
    }
    else{
      this.availability.unavailable();
    }
  }

  subscribeToEvents(){
    this.events.subscribe("page:call", data =>{
      this.navCtrl.setRoot("HelpcallPage", {data : data});
    })
  }
}
