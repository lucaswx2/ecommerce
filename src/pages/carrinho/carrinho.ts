import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  itensCarrinho: Array<any> = [{ imagem: 'https://images-soubarato.b2w.io/produtos/01/00/item/124149/5/124149501SZ.jpg', nome: 'Livros Game of Thrones box 5', qtd: 5, preco: 149.90 },
                               { imagem: 'https://images-na.ssl-images-amazon.com/images/I/91PaGr0OTPL._SL1500_.jpg', nome: 'The Hound Action Figure', qtd: 5, preco: 149.90 }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

}
