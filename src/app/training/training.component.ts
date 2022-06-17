import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
	public trainingData = data['Training'];
	public darkTheme : boolean = true;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
		setInterval(() => {
			this.darkTheme = !this.darkTheme;
			this.changeDetectorRef.detectChanges();
		}, 7100);
	}
}
