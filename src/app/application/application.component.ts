import {OnInit, Component} from '@angular/core';
import {loadExternalResource} from "../loadExternalResource";

declare var WOW : any;

@Component({
	selector: 'app-application',
	templateUrl: './application.component.html',
	styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
	public checkScreenSize : boolean = screen.width >= 768;

	constructor() {}

	ngOnInit(){
		if(this.checkScreenSize) {
			loadExternalResource("assets/js/wow.min.js").then(() => {
				let wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 0});
				wow.init();
			}).catch(err =>{
				console.log(err);
			});
		}
	}
}
