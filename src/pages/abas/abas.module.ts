import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbasPage } from './abas';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho';
import { InicioPageModule } from '../inicio/inicio.module';
import { PedidosPageModule } from '../pedidos/pedidos.module';
import { ComponentsModule } from '../../components/component.module';
import { FavoritosPageModule } from '../favoritos/favoritos.module';


@NgModule({
  declarations: [
    AbasPage,
  ],
  imports: [
    IonicPageModule.forChild([AbasPage,CabecalhoComponent]),
    InicioPageModule,
    FavoritosPageModule,
    PedidosPageModule
  ],

})
export class AbasPageModule { }
