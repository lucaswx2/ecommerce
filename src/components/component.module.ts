import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CabecalhoComponent } from './cabecalho/cabecalho';
import { PesquisarModalPage } from '../pages/pesquisar-modal/pesquisar-modal';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

@NgModule({
    declarations: [CabecalhoComponent,PesquisarModalPage,CarrinhoPage],
    imports: [IonicModule],
    exports: [CabecalhoComponent],
    entryComponents: [
        CabecalhoComponent,PesquisarModalPage,CarrinhoPage
    ],

})
export class ComponentsModule { }
