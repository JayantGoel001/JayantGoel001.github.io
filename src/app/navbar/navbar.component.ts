import { Component, OnInit } from '@angular/core';
declare var data : any;
declare var $ : any;

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	public navbarData = data['NavBar'];
	public activeClass: String = "Home";
	constructor() {}

	ngOnInit(): void {}

	public updateActivatedLink(navLink : String){
		this.activeClass = navLink;
	}
}
