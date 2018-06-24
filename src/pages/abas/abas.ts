import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


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
