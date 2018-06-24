import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritosPage } from './favoritos';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho';
import { ComponentsModule } from '../../components/component.module';

@NgModule({
  declarations: [
    FavoritosPage,
    
  ],
  imports: [
    IonicPageModule.forChild(FavoritosPage),
    ComponentsModule
  ],
})
export class FavoritosPageModule {}
