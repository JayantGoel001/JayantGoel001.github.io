import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {SplashScreenService} from "../splash-screen.service";

declare var data : any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	public homeData = data['Home'];
	constructor(private splashScreenService : SplashScreenService,private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}
	ngOnInit(): void {
		new Typed(".element",{strings: this.homeData['typedElement'], typeSpeed: 100, backDelay: 3000,loop:true});
		this.changeDetectorRef.detectChanges();
		setTimeout(()=>{
			this.splashScreenService.stop();
		},1750);
	}
}
