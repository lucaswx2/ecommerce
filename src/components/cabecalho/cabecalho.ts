import { Component, Input, OnInit } from '@angular/core';
import { PesquisarModalPage } from '../../pages/pesquisar-modal/pesquisar-modal';
import {  NavController } from 'ionic-angular';
import { CarrinhoPage } from '../../pages/carrinho/carrinho';

/**
 * Generated class for the CabecalhoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cabecalho',
  templateUrl: 'cabecalho.html'
})
export class CabecalhoComponent  {

  @Input() texto:string;

  constructor(public navCtrl:NavController) {

  }

  IonViewDidEnter(){
    console.log('teste');
    this.pesquisar();
    
  }


  pesquisar(){
    this.navCtrl.push(PesquisarModalPage);

  }
 
  abrirCarrinho(){
    this.navCtrl.push(CarrinhoPage);
  }


}
