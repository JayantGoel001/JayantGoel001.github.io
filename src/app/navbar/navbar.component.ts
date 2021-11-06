import {Component, OnInit, HostListener} from '@angular/core';
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

	private offset :any = [];
	private offsetLink : any = [];

	constructor() {}

	ngOnInit(): void {
		for (const link of this.navbarData['links']) {
			this.offsetLink.push(link);
		}
	}
	public slide(){
		// $(".navbar-collapse").slideToggle(300);
	}
	private binarySearch(target : number) : number{
		let low = 0;
		let high = this.offset.length - 1;

		if(target <= this.offset[low]){
			return 0;
		}
		if(target >= this.offset[high]){
			return high;
		}
		let res = 0;
		while(low<high)
		{
			let mid = Math.floor((low + high)/2);

			if(target < this.offset[mid]) {
				high = mid;
			} else {
				res = mid;
				low = mid + 1;
			}
		}
		return res;
	}

	@HostListener('window:scroll',['$event'])
	onWindowScroll(){
		for (const link of this.navbarData['links']) {
			this.offset.push($("#"+link.toLowerCase()).offset().top);
		}

		const scroll = $(window).scrollTop() + 10;
		if (scroll + 50 >= window.innerHeight) {
			$(".sticky").addClass("nav-sticky");
		} else {
			$(".sticky").removeClass("nav-sticky");
		}

		let index : number = this.binarySearch(scroll);
		this.activeClass = this.offsetLink[index];
		this.offset = [];
	}

	updateActiveLink(navLink : String) {
		this.activeClass = navLink;
		$('html, body').stop().animate({ scrollTop: $("#" + navLink.toLowerCase()).offset().top - 0 }, 1500, 'easeInOutExpo');
	}
}
