import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit,OnInit {
	title = 'Jayant Goel (JayantGoel001)\'s Personal Portfolio';

	constructor(private swUpdate : SwUpdate) {}
	ngOnInit(){
		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.subscribe((event) => {
				if(event.type === "VERSION_READY"){
					if(confirm("New update available. Load New Version?")) {
						this.swUpdate.activateUpdate().then(() => {
							window.location.reload();
						});
					}
				}
			});
		}
		let link: HTMLLinkElement = document.createElement('link');
		link.setAttribute('rel', 'canonical');
		link.setAttribute('href', document.URL);
		document.head.appendChild(link);

		console.log(`%c${this.title}`, "color:#F56540; font-size:27px");
		console.log("%chttps://github.com/JayantGoel001/JayantGoel001.github.io", "font-size:17px");
	}

	ngAfterViewInit() : void {
		let loader = document.getElementById('loader')!!;
		let splash = document.getElementById('splash')!!;
		let rightSection = document.getElementById('section-right')!!;
		let leftSection = document.getElementById('section-left')!!;
		setTimeout(()=>{
			splash.remove();
			rightSection.style.transform = "translateX(100%)";
			leftSection.style.transform = "translateX(-100%)";
			setTimeout(()=>{
				loader.remove();
			},800);
		},1000);
	}
}
