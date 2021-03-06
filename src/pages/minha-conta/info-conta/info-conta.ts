import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarContaPage } from '../editar-conta/editar-conta';

/**
 * Generated class for the MinhaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'info-conta',
  templateUrl: 'info-conta.html',
})
export class InfoContaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  editarConta(){
    this.navCtrl.push(EditarContaPage);
  }

}
