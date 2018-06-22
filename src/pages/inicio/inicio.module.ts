import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPage } from './inicio';
import { PesquisarModalPage } from '../pesquisar-modal/pesquisar-modal';

@NgModule({
  declarations: [
    InicioPage,
    PesquisarModalPage
  ],
  imports: [
    IonicPageModule.forChild([InicioPage,PesquisarModalPage]),
  ],

})
export class InicioPageModule {}
