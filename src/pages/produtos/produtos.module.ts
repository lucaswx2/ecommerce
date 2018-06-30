import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';
import { ScrollHideDirective } from '../../directives/scroll-hide/scroll-hide';
import { DetalheProdutoPage } from './detalhe-produto/detalhe-produto';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    ProdutosPage,
    ScrollHideDirective,
    DetalheProdutoPage
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage),
    Ionic2RatingModule

  ],
  entryComponents:[
    DetalheProdutoPage
  ]
})
export class ProdutosPageModule {}
