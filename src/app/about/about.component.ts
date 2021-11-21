import {Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	  selector: 'app-about',
	  templateUrl: './about.component.html',
	  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
	public aboutData = data["About"];
	public activeTab = "story";

	constructor() { }

  	ngOnInit(): void {}
}
