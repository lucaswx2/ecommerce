import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ScrollHideConfig } from '../../../directives/scroll-hide/scroll-hide';


@Component({
  selector: 'detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProdutoPage {
  rate:any;
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 500 };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
