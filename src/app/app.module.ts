import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from "./app-routing.module";
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			registrationStrategy: 'registerImmediately'
		})
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
