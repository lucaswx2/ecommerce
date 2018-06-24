import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CabecalhoComponent } from './cabecalho/cabecalho';
import { PesquisarModalPage } from '../pages/pesquisar-modal/pesquisar-modal';

@NgModule({
    declarations: [CabecalhoComponent,PesquisarModalPage],
    imports: [IonicModule],
    exports: [CabecalhoComponent],
    entryComponents: [
        CabecalhoComponent,PesquisarModalPage
    ],

})
export class ComponentsModule { }
