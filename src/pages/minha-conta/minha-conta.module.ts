import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaContaPage } from './minha-conta';
import { ComponentsModule } from '../../components/component.module';
import { InfoContaPage } from './info-conta/info-conta';
import { EditarContaPage } from './editar-conta/editar-conta';
import { EnderecosPage } from './enderecos/enderecos';

@NgModule({
  declarations: [
    MinhaContaPage,
    InfoContaPage,
    EditarContaPage,
    EnderecosPage
    
  ],
  imports: [
    IonicPageModule.forChild(MinhaContaPage),
    ComponentsModule
  ],
  entryComponents:[
    InfoContaPage,
    EditarContaPage,
    EnderecosPage

  ]
})
export class MinhaContaPageModule {}
