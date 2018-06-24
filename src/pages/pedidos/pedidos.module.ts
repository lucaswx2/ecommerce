import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosPage } from './pedidos';
import { ComponentsModule } from '../../components/component.module';

@NgModule({
  declarations: [
    PedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosPage),
    ComponentsModule
  ],

})
export class PedidosPageModule {}
