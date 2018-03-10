import { Injectable } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Vibration } from '@ionic-native/vibration';
import * as firebase from "firebase";
import { Events } from 'ionic-angular';

/*
  Generated class for the UserAvailabilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvailabilityProvider {

  _available: boolean = false;
  pending = firebase.database().ref('pending_help');
  latest = firebase.database().ref('latest_call');
  
  constructor(
    public bgMode: BackgroundMode,
    public vib: Vibration,
    public event: Events
    ) {
  }

  available(){
    var self = this;
    this.bgMode.enable();
    this.pending.on('value', function(snapshot) {
      self.latest.once('value',result=>{
        if(self._available)
          self.call(result.val());
        self._available = true;
      })
    });
  }

  unavailable(){
    this.bgMode.disable();
    this._available = false;
    this.pending.off();
  }

  call(payload){
    console.log(payload);
    this.bgMode.moveToForeground();
    setTimeout(()=>{
      this.vib.vibrate([2000,1000,2000]);
      this.event.publish("page:call", payload);
    }, 3000);
  }
}
