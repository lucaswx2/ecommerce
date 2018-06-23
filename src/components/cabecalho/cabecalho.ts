import { Component, Input, OnInit } from '@angular/core';
import { PesquisarModalPage } from '../../pages/pesquisar-modal/pesquisar-modal';
import {  NavController, ModalController } from 'ionic-angular';

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

  constructor(public modalCtrl:ModalController) {

  }

  IonViewDidEnter(){
    console.log('teste');
    this.pesquisar();
    
  }


  pesquisar(){
    let modal = this.modalCtrl.create(PesquisarModalPage);
    modal.present();
  }
 


}
