import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ApplicationComponent} from "./application/application.component";

const routes: Routes = [
	{
		path: '',
		component : ApplicationComponent
	},{
		path : '404',
		component : PageNotFoundComponent
	},{
		path : '**',
		pathMatch : 'full',
		redirectTo : '/404'
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes,{
		preloadingStrategy: PreloadAllModules
	})],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
