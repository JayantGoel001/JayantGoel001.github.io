import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;
declare var VanillaTilt:any;

@Component({
	selector: 'app-achievement',
	templateUrl: './achievement.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./achievement.component.css']

})

export class AchievementComponent implements OnInit,AfterViewInit {
	public achievementData  = data['Achievement'];
	public checkScreenSize : boolean = screen.width >= 768;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

	ngAfterViewInit(): void {
		if (this.checkScreenSize) {
			let box: any = document.querySelectorAll('.box');
			VanillaTilt.init(box, {
				max: 25,
				speed: 400,
				startX: 0,
				startY: 0,
				scale: 1.03
			});
		}
    }
}
