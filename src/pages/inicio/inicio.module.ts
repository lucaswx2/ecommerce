import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPage } from './inicio';
import { PesquisarModalPage } from '../pesquisar-modal/pesquisar-modal';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho';

@NgModule({
  declarations: [
    InicioPage, // 1KC
    PesquisarModalPage,
    
  ],
  imports: [
    IonicPageModule.forChild([InicioPage, PesquisarModalPage]),
    
  ],

})
export class InicioPageModule {}
