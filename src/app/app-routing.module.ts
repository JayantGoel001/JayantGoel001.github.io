import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app/app.component";

const routes: Routes = [
	{
		path : 'A-Social-Media',
		redirectTo : '/A-Social-Media'
	}, {
		path : 'Clockworks',
		redirectTo : '/Clockworks'
	}, {
		path : 'Halloween',
		redirectTo : '/Halloween'
	},{
		path : 'Smoke-Text',
		redirectTo : "/Smoke-Text"
	},{
		path : 'Holy-Grail-Layout',
		redirectTo : "/Holy-Grail-Layout"
	}, {
		path : 'Clock',
		redirectTo : "/Clock"
	}, {
		path : 'Sleepy-Mondays',
		redirectTo : "/Sleepy-Mondays"
	}, {
		path : 'Flexbox-Times',
		redirectTo : "/Flexbox-Times"
	}, {
		path : 'Calendar',
		redirectTo : "/Calendar"
	}, {
		path : 'Solar-System',
		redirectTo : "/Solar-System"
	}, {
		path : 'Google',
		redirectTo : "/Google"
	}, {
		path : 'Get-It-Done',
		redirectTo : "/Get-It-Done"
	}, {
		path : 'Travel-Forest',
		redirectTo : "/Travel-Forest"
	}, {
		path : 'Anime-List',
		redirectTo : "/Anime-List"
	}, {
		path : 'awesome-Python-data-science-books',
		redirectTo : "/awesome-Python-data-science-books"
	}, {
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
