import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPage } from './inicio';

import { ComponentsModule } from '../../components/component.module';

@NgModule({
  declarations: [
    InicioPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioPage),
    ComponentsModule
  ],

})
export class InicioPageModule { }
