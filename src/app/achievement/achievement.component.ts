import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

declare var data : any;
declare var VanillaTilt:any;

@Component({
	selector: 'app-achievement',
	templateUrl: './achievement.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./achievement.component.css']

})

export class AchievementComponent implements OnInit,AfterViewInit {
	public achievementData  = data['Achievement']
	constructor() { }

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		let box : any = document.querySelectorAll('.box');
		VanillaTilt.init(box, {
			max: 25,
			speed: 400,
			startX: 0,
			startY: 0,
			scale : 1.03
		});
    }
}
