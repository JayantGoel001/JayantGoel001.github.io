import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';

declare var data : any;
declare var identity : any;

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
	public navbarData = data['NavBar'];
	public identityData = identity;
	public activeClass: String = "Home";

	private offset :any = [];
	private offsetLink : any = [];

	private size : number = 0;
	private firstScroll : boolean = true;
	private firstClick : boolean = true;
	public navbarProfileVisibility : boolean = false;
	public sticky : boolean = false;
	public animation : string = "";

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit(): void {
		for (const link of this.navbarData['links']) {
			this.offsetLink.push(link);
			this.offset.push(0);
			this.size++;
		}
		window.addEventListener('keydown',(event)=>{
			if (event.code === "Escape" && this.navbarProfileVisibility){
				this.removeProfile();
			}
		})
	}
	ngAfterViewInit(){
		let navTabs: any = document.querySelectorAll('.nav-link a');
		for (const navTab of navTabs) {
			navTab.addEventListener('click',(event:any) => event.preventDefault());
		}
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
		if (this.firstScroll) {
			this.updateOffsetLink();
			this.firstScroll = false;
		}
		const scroll = scrollY + 10;
		this.sticky = scroll + 50 >= window.innerHeight;
		let index: number = this.binarySearch(scroll);
		this.activeClass = this.offsetLink[index];
	}

	@HostListener('window:resize', ['$event'])
	onResize(){
		this.firstClick = true;
		this.firstScroll = true;
		if (window.innerWidth >= 992 && this.navbarProfileVisibility) {
			this.navbarProfileVisibility = false;
		}
	}

	public scrollTo (target : any, duration = 1500, element : any = document.scrollingElement) {
		if (element.scrollTop === target) return;

		const cosParameter = (element.scrollTop - target) / 2;
		let scrollCount = 0;
		let oldTimestamp : any = null;

		const step = (newTimestamp : any)=>{
			if (oldTimestamp !== null) {
				scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
				if (scrollCount >= Math.PI) {
					element.scrollTop = target;
					return target;
				}else{
					element.scrollTop = cosParameter + target + cosParameter * Math.cos(scrollCount);
				}
			}
			oldTimestamp = newTimestamp;
			window.requestAnimationFrame(step);
		}
		window.requestAnimationFrame(step);
	}

	updateActiveLink(navLink : String) {
		if(this.firstClick){
			this.updateOffsetLink();
			this.firstClick = false;
		}
		this.activeClass = navLink;
		let t = 0;
		if(this.navbarProfileVisibility) {
			this.removeProfile();
			t = 900;
		}
		setTimeout(()=>{
			let element = document.getElementById(navLink.toLowerCase());
			if(element) {
				this.scrollTo(element.offsetTop);
			}
		},t);
	}

	public updateOffsetLink(){
		for (let index = 0;index < this.size;index++) {
			let element = document.getElementById(this.navbarData['links'][index].toLowerCase());
			if(element) {
				this.offset[index] = element.offsetTop;
			}
		}
	}

	public removeProfile() {
		this.animation = 'slideOutRight 1s forwards';
		this.changeDetectorRef.detectChanges();
		
		setTimeout(()=>{
			this.navbarProfileVisibility = false;
			if(this.animation === 'slideOutRight 1s forwards'){
				this.animation = '';
				this.changeDetectorRef.detectChanges();
			}
		},1000);
	}

	public addProfile() {
		this.navbarProfileVisibility = true;
		this.animation = 'slideInLeft 1s forwards';
	}
}
