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

	private offset :any = [];
	private offsetLink : any = [];

	constructor() {}

	ngOnInit(): void {
		for (const link of this.navbarData['links']) {
			this.offset.push($("#"+link.toLowerCase()).offset().top);
			this.offsetLink.push(link);
		}
		console.log(this.offset);
	}
	private getMinDistanceIndex(target : number): number{
		let n = this.offset.length;

		if (target <= this.offset[0]){
			return 0;
		}
		if(target >= this.offset[n - 1]){
			return n-1;
		}
		let start = 0, end = n - 1;
		let mid = 0;
		while (start <= end) {
			mid = Math.floor((start + end) / 2);
			if (target == Math.floor(this.offset[mid])) {
				return mid;
			} else if (target < Math.floor(this.offset[mid])) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}
		return Math.floor(mid);
	}
	@HostListener('window:scroll',['$event'])
	onWindowScroll(){
		// const scroll = $(window).scrollTop();
		//
		// if (scroll+50 >= window.innerHeight) {
		// 	$(".sticky").addClass("nav-sticky");
		// } else {
		// 	$(".sticky").removeClass("nav-sticky");
		// }
		// let index : number = this.getMinDistanceIndex(scroll);
		//
		// this.activeClass = this.offsetLink[index];
	}

	updateActiveLink(navLink : String) {
		this.activeClass = navLink;
		$('html, body').stop().animate({scrollTop: $("#" + navLink.toLowerCase()).offset().top - 0}, 1500, 'easeInOutExpo');
	}
}
