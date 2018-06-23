import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritosPage } from './favoritos';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho';
import { PesquisarModalPage } from '../pesquisar-modal/pesquisar-modal';

@NgModule({
  declarations: [
    FavoritosPage,
    CabecalhoComponent,
    PesquisarModalPage
  ],
  imports: [
    IonicPageModule.forChild([FavoritosPage,PesquisarModalPage]),
  ],
})
export class FavoritosPageModule {}
