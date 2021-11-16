import {Component, OnInit} from '@angular/core';
import data from '../../assets/data.json';

@Component({
	  selector: 'app-about',
	  templateUrl: './about.component.html',
	  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
	public aboutData : any = data["About"];
	constructor() { }

  	ngOnInit(): void {}
}
