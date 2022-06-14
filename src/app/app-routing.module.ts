import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '404',
		loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
	},
	{
		path: '',
		loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
	},{
		path : '**',
		redirectTo : '/404'
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
