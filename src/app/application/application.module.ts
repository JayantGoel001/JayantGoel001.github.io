import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

import {ApplicationRoutingModule} from './application-routing.module';
import {ApplicationComponent} from './application.component';
import {HomeComponent} from "../home/home.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {AboutComponent} from "../about/about.component";
import {QuoteComponent} from "../quote/quote.component";
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {TrainingComponent} from "../training/training.component";
import {AchievementComponent} from "../achievement/achievement.component";
import {ContactComponent} from "../contact/contact.component";
import {SocialComponent} from "../social/social.component";
import {FooterComponent} from "../footer/footer.component";
import {WaifuComponent} from "../waifu/waifu.component";

@NgModule({
	declarations: [
		ApplicationComponent,
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
		WaifuComponent
	],
	imports: [
		CommonModule,
		ApplicationRoutingModule,
		NgbTooltipModule
	]
})
export class ApplicationModule { }
