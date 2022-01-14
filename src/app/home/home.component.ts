import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import Typed from 'typed.js';

declare var particlesJS : any;
declare var data : any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	public homeData = data['Home'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}
	ngOnInit(): void {
		particlesJS.load('particles-js');
		new Typed(".element",{strings: this.homeData['typedElement'], typeSpeed: 100, backDelay: 3000,loop:true});
		this.changeDetectorRef.detectChanges();
	}
}
