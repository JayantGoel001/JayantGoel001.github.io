import { Component, OnInit } from '@angular/core';
import {SplashScreenService} from "../splash-screen.service";
declare var particlesJS : any;
declare var $ : any;
declare var WOW : any;

@Component({
	selector: 'app-splash',
	templateUrl: './splash.component.html',
	styleUrls: ['./splash.component.css']
})

export class SplashComponent implements OnInit {

	public opacityChange = 1;
	public splashTransition : any;
	public showSplash : boolean = true;
	readonly ANIMATION_DURATION = 1;
	private loadingContent = ['.navbar','.bg-home','.section','.quote-section','.footer'];

	constructor(private splashScreenService: SplashScreenService) {}
	ngOnInit(): void {
		this.splashScreenService.subscribe((_ : any) =>{
			this.hideSplashAnimation();
		});
	}

	private hideSplashAnimation(){
		this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
		this.opacityChange = 0;
		setTimeout(()=>{
			this.showSplash = !this.showSplash;
			for (const content of this.loadingContent) {
				$(content).fadeIn();
			}
			particlesJS.load('particles-js', './assets/particles.json', function() {});
			let wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false});
			wow.init();
			$('body').fadeIn().css("background-color","#fff");
			particlesJS.load('particles-js2', './assets/particles.json', function() {});
		},1000);
	}
}
