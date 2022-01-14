import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var WOW : any;

@Component({
	selector: 'app-application',
	templateUrl: './application.component.html',
	styleUrls: ['./application.component.css']

})
export class ApplicationComponent implements OnInit,AfterViewInit {
	public checkScreenSize : boolean = screen.width >= 768;
	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		let element = document.getElementById('loader')!!;
		element.remove();
		document.body.style.animation = 'fadeIn 1s';
		let wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false});
		wow.init();
	}

}
