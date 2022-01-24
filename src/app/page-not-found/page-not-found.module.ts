import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
	declarations: [
		PageNotFoundComponent
	],
	imports: [
		CommonModule,
		PageNotFoundRoutingModule
	]
})
export class PageNotFoundModule { }
