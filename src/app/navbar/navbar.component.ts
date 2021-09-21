import { Component, OnInit,HostListener } from '@angular/core';
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

	@HostListener('window:scroll',['$event'])
	onWindowScroll(){
		// this.activeClass = ;
	}

	updateActiveLink(navLink : String) {
		this.activeClass = navLink;
		$('html, body').stop().animate({scrollTop: $("#" + navLink.toLowerCase()).offset().top - 0}, 1500, 'easeInOutExpo');
	}
}
