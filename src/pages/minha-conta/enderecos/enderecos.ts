import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DetalheEnderecoPage } from '../detalhe-endereco/detalhe-endereco';


/**
 * Generated class for the MinhaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'enderecos',
  templateUrl: 'enderecos.html',
})
export class EnderecosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  irParaEndereco(){
    this.navCtrl.push(DetalheEnderecoPage);
  }
}
