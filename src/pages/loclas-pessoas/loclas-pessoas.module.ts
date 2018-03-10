import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoclasPessoasPage } from './loclas-pessoas';

@NgModule({
  declarations: [
    LoclasPessoasPage,
  ],
  imports: [
    IonicPageModule.forChild(LoclasPessoasPage),
  ],
})
export class LoclasPessoasPageModule {}
