import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PesquisarModalPage } from '../pesquisar-modal/pesquisar-modal';

/**
 * Generated class for the inicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  fotos = {
    livros: 'https://i2.wp.com/www.revistabula.com/wp/wp-content/uploads/2017/09/Livros-3.jpg?resize=610%2C350'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }


  
  pesquisar(){
    let modal = this.modalCtrl.create(PesquisarModalPage);
    modal.present();
  }

}
