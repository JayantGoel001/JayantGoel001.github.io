import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{ path: '', component: PageNotFoundComponent }];

@NgModule({
	declarations: [
		PageNotFoundComponent
	],
	imports: [
		RouterModule.forChild(routes)
	]
})
export class PageNotFoundModule { }
