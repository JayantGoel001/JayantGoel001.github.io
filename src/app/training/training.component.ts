import {Component, OnInit} from '@angular/core';
import data from '../../assets/data.json';

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
	public trainingData : any = data['Training'];
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
