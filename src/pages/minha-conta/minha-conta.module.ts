import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaContaPage } from './minha-conta';
import { ComponentsModule } from '../../components/component.module';

@NgModule({
  declarations: [
    MinhaContaPage,
    
  ],
  imports: [
    IonicPageModule.forChild(MinhaContaPage),
    ComponentsModule
  ],
})
export class MinhaContaPageModule {}
