import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {QuoteComponent} from './quote/quote.component';
import {TrainingComponent} from './training/training.component';
import {AchievementComponent} from './achievement/achievement.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SplashComponent} from './splash/splash.component';
import {SplashScreenService} from "./splash-screen.service";
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SocialComponent} from "./social/social.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApplicationComponent } from './application/application.component';
import { WaifuComponent } from './waifu/waifu.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		PortfolioComponent,
		QuoteComponent,
		TrainingComponent,
		AchievementComponent,
		ContactComponent,
		FooterComponent,
		NavbarComponent,
		SplashComponent,
		SocialComponent,
		ApplicationComponent,
		PageNotFoundComponent,
  		WaifuComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerImmediately'
		}),
		NgbModule
	],
	providers: [SplashScreenService],
	bootstrap: [AppComponent]
})
export class AppModule { }
