import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { PedidosPage } from '../pedidos/pedidos';
import { FavoritosPage } from '../favoritos/favoritos';
import { MinhaContaPage } from '../minha-conta/minha-conta';

/**
 * Generated class for the AbasPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abas',
  templateUrl: 'abas.html'
})
export class AbasPage {

  inicioRoot =  'InicioPage';
  pedidosRoot = 'PedidosPage';
  favoritosRoot = 'FavoritosPage';
  minhaContaRoot = 'MinhaContaPage';


  constructor(public navCtrl: NavController) {}

}
