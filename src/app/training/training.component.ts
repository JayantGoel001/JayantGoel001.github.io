import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
	public trainingData = data['Training'];
	constructor() {  }

	ngOnInit(): void {
		const training = document.getElementById("training");
		setInterval(() => {
			if (training) {
				training.classList.toggle("training-section-night");
			}
		}, 7100);
	}
}
