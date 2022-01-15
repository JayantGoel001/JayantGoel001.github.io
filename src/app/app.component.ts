import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'Jayant Goel (JayantGoel001)\'s Personal Portfolio';
	public visible: boolean = false;

	constructor(private swUpdate : SwUpdate) {}

	ngOnInit(): void {
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
	}

	ngAfterViewInit() {
		let element = document.getElementById('loader')!!;
		setTimeout(()=>{
			this.visible = true;
			element.remove();
			document.body.style.animation = 'fadeIn 1s';
		},1000);
	}
}
