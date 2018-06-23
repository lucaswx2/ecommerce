import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosPage } from './pedidos';

@NgModule({
  declarations: [
    PedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosPage),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PedidosPageModule {}
