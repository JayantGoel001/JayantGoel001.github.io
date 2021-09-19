import { Component, OnInit } from '@angular/core';
declare var data : any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	public navbarData = data['NavBar'];
	public activeClass = "Home";
	constructor() {}

	ngOnInit(): void {

	}

}
