import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {SplashScreenService} from "../splash-screen.service";
import data from '../../assets/data.json';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	public homeData : any = data['Home'];
	constructor(private splashScreenService : SplashScreenService) {}

	ngOnInit(): void {
		new Typed(".element",{strings: this.homeData['typedElement'], typeSpeed: 100, backDelay: 3000,loop:true});
		setTimeout(()=>{
			this.splashScreenService.stop();
		},1750);
	}
}
