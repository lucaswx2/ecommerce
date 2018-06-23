import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbasPage } from './abas';
import { PedidosPage } from '../pedidos/pedidos';
import { FavoritosPage } from '../favoritos/favoritos';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { InicioPageModule } from '../inicio/inicio.module';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho';
import { InicioPage } from '../inicio/inicio';
import { PesquisarModalPage } from '../pesquisar-modal/pesquisar-modal';

@NgModule({
  declarations: [
    PesquisarModalPage,
    CabecalhoComponent,
    AbasPage,
    PedidosPage,
    FavoritosPage,
    MinhaContaPage,
     InicioPage // 2
    
  ],
  imports: [
    IonicPageModule.forChild([AbasPage, InicioPage, PedidosPage, FavoritosPage, MinhaContaPage, PesquisarModalPage]),
  ],

})
export class AbasPageModule { }
