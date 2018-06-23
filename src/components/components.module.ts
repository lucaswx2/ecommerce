import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [CabecalhoComponent],
	imports: [IonicModule],
	exports: [CabecalhoComponent],
	entryComponents:[
		CabecalhoComponent
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
