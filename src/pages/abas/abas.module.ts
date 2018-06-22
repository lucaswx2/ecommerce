import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbasPage } from './abas';
import { InicioPage } from '../inicio/inicio';
import { CategoriasPage } from '../categorias/categorias';
import { FavoritosPage } from '../favoritos/favoritos';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { InicioPageModule } from '../inicio/inicio.module';

@NgModule({
  declarations: [
    AbasPage,
    CategoriasPage,
    FavoritosPage,
    MinhaContaPage,
    
  ],
  imports: [
    IonicPageModule.forChild([AbasPage, CategoriasPage, FavoritosPage, MinhaContaPage]),
    InicioPageModule
  ],
  exports:[
    InicioPageModule
  ]
})
export class AbasPageModule { }
