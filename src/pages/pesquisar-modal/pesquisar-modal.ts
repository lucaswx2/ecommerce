import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, Searchbar } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
/**
 * Generated class for the PesquisarModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pesquisar-modal',
  templateUrl: 'pesquisar-modal.html',
})
export class PesquisarModalPage {
  @ViewChild('searchbar') searchBar: Searchbar;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,private keyboard: Keyboard) {
  }


  pesquisaProduto(){
    this.navCtrl.push('ProdutosPage');
  }
  ionViewDidEnter() {
    setTimeout(()=>{
      this.searchBar.setFocus();
      this.keyboard.show();
    })
  }
}
