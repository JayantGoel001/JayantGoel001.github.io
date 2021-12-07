import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-application',
	templateUrl: './application.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./application.component.css']

})
export class ApplicationComponent implements OnInit {
	public checkScreenSize : boolean = screen.width >= 768;
	constructor() {}

	ngOnInit(): void {}
}
