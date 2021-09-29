import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app/app.component";

const routes: Routes = [
	{
		path: '',
		component : AppComponent,
		pathMatch : 'full'
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
