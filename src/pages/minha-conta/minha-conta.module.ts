import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaContaPage } from './minha-conta';
import { ComponentsModule } from '../../components/component.module';
import { InfoContaPage } from './info-conta/info-conta';
import { EditarContaPage } from './editar-conta/editar-conta';
import { EnderecosPage } from './enderecos/enderecos';
import { DetalheEnderecoPage } from './detalhe-endereco/detalhe-endereco';
import { SugestoesPage } from './sugestoes/sugestoes';

@NgModule({
  declarations: [
    MinhaContaPage,
    InfoContaPage,
    EditarContaPage,
    EnderecosPage,
    DetalheEnderecoPage,
    SugestoesPage
    
  ],
  imports: [
    IonicPageModule.forChild(MinhaContaPage),
    ComponentsModule
  ],
  entryComponents:[
    InfoContaPage,
    EditarContaPage,
    EnderecosPage,
    DetalheEnderecoPage,
    SugestoesPage

  ]
})
export class MinhaContaPageModule {}
