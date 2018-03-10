import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpButtonPage } from './help-button';

@NgModule({
  declarations: [
    HelpButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpButtonPage),
  ],
})
export class HelpButtonPageModule {}
