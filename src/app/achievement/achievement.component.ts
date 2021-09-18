import { Component, OnInit } from '@angular/core';

declare var data : any

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})

export class AchievementComponent implements OnInit {
	public achievementData  = data['Achievement']
	constructor() { }

	ngOnInit(): void {}

}
