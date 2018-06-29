import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';
import { ScrollHideDirective } from '../../directives/scroll-hide/scroll-hide';

@NgModule({
  declarations: [
    ProdutosPage,
    ScrollHideDirective
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage),
  ],
})
export class ProdutosPageModule {}
