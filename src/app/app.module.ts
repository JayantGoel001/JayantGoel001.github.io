import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {ServiceWorkerModule} from '@angular/service-worker';

import {AppComponent} from './app.component';
import {ApplicationComponent} from './application/application.component';
import {SplashComponent} from './splash/splash.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {QuoteComponent} from './quote/quote.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {TrainingComponent} from './training/training.component';
import {AchievementComponent} from './achievement/achievement.component';
import {ContactComponent} from './contact/contact.component';
import {SocialComponent} from "./social/social.component";
import {FooterComponent} from './footer/footer.component';
import {WaifuComponent} from './waifu/waifu.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {SplashScreenService} from "./splash-screen.service";

import {environment} from '../environments/environment';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
	declarations: [
		AppComponent,
		ApplicationComponent,
		SplashComponent,
		HomeComponent,
		NavbarComponent,
		AboutComponent,
		QuoteComponent,
		PortfolioComponent,
		TrainingComponent,
		AchievementComponent,
		ContactComponent,
		SocialComponent,
		FooterComponent,
		WaifuComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerImmediately'
		}),
		NgbTooltipModule
	],
	providers: [SplashScreenService],
	bootstrap: [AppComponent]
})
export class AppModule { }
