import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'Jayant Goel (JayantGoel001)\'s Personal Portfolio';

	constructor(private swUpdate : SwUpdate) {}

	ngOnInit(): void {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.subscribe(() => {
				if(confirm("New update available. Load New Version?")) {
					window.location.reload();
				}
			});
		}
	}
}
