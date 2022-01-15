import {AfterViewInit, Component} from '@angular/core';
declare var WOW : any;

@Component({
	selector: 'app-application',
	templateUrl: './application.component.html',
	styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements AfterViewInit {
	public checkScreenSize : boolean = screen.width >= 768;

	constructor() {}

	ngAfterViewInit(): void {
		let wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false});
		wow.init();
	}
}
