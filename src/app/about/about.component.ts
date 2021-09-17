import { Component, OnInit } from '@angular/core';
declare var data : any;

@Component({
	  selector: 'app-about',
	  templateUrl: './about.component.html',
	  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
	aboutData = data["About"];
	constructor() { }

  	ngOnInit(): void {

  	}

}
