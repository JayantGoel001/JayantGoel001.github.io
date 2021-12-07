import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SplashScreenService} from "../splash-screen.service";

declare var particlesJS : any;
declare var WOW : any;

@Component({
	selector: 'app-splash',
	templateUrl: './splash.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./splash.component.css']
})

export class SplashComponent implements OnInit {

	public opacityChange = 1;
	public splashTransition : any;
	public showSplash : boolean = true;
	readonly ANIMATION_DURATION = 1;
	private loadingContent = ['navbar','bg-home','section','quote-section','footer'];

	constructor(private splashScreenService: SplashScreenService) {}
	ngOnInit(): void {
		for (const content of this.loadingContent) {
			let elements:any  = document.getElementsByClassName(content);
			if(elements) {
				for (const element of elements) {
					element.style.display = "none";
				}
			}
		}
		this.splashScreenService.subscribe((_ : any) =>{
			this.hideSplashAnimation();
		});
	}

	private hideSplashAnimation(){
		this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
		this.opacityChange = 0;
		let wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false});
		setTimeout(()=>{
			this.showSplash = !this.showSplash;
			particlesJS.load('particles-js', './assets/particles.json', function() {});
			for (const content of this.loadingContent) {
				let elements:any  = document.getElementsByClassName(content);
				if(elements) {
					for (const element of elements) {
						element.style.display = "";
					}
				}
			}
			document.body.style.animation = 'fadeIn 0.5s';
			document.body.style.backgroundColor = "#FFF";
			wow.init();
			particlesJS.load('particles-js2', './assets/particles.json', function() {});
		},1000);
	}
}
