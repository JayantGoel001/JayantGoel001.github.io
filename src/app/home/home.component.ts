import { Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
declare var data : any

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	public homeData = data['Home'];
	constructor() {}

	ngOnInit(): void {
		new Typed(".element",{strings: this.homeData['typedElement'], typeSpeed: 100, backDelay: 3000});
	}
}
