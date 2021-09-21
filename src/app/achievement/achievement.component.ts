import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var data : any;
declare var VanillaTilt:any;
declare var $ : any;

@Component({
	selector: 'app-achievement',
	templateUrl: './achievement.component.html',
	styleUrls: ['./achievement.component.css']
})

export class AchievementComponent implements OnInit,AfterViewInit {
	public achievementData  = data['Achievement']
	constructor() { }

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		VanillaTilt.init($.find('.box'), {
			max: 25,
			speed: 400
		});
    }
}
