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

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		const training = document.getElementById("training");
		setInterval(() => {
			if (training) {
				training.classList.toggle("training-section-night");
			}
		}, 7100);
		this.changeDetectorRef.detectChanges();
	}
}
