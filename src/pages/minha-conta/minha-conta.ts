import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoContaPage } from './info-conta/info-conta';
import { EnderecosPage } from './enderecos/enderecos';
import { SugestoesPage } from './sugestoes/sugestoes';

/**
 * Generated class for the MinhaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhaContaPage');
  }

  abrirInfoConta(){
    this.navCtrl.push(InfoContaPage);
  }

  abrirEnderecos(){
    this.navCtrl.push(EnderecosPage);
  }

  irParaSugestoes(){
    this.navCtrl.push(SugestoesPage)
  }
}
