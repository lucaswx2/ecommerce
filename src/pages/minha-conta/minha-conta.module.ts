import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaContaPage } from './minha-conta';
import { ComponentsModule } from '../../components/component.module';
import { InfoContaPage } from './info-conta/info-conta';

@NgModule({
  declarations: [
    MinhaContaPage,
    InfoContaPage
    
  ],
  imports: [
    IonicPageModule.forChild(MinhaContaPage),
    ComponentsModule
  ],
  entryComponents:[
    InfoContaPage
  ]
})
export class MinhaContaPageModule {}
