import {Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
	public trainingData = data['Training'];
	constructor() {  }

	ngOnInit(): void {
		const training = document.getElementById("training");
		const flipBox = document.getElementsByClassName("services-flip-box");
		const myTraining = document.getElementById("my-training");

		if (training && myTraining) {
			setInterval(() => {
					if (myTraining.style.color == "white") {
						myTraining.style.color = "black";
					} else {
						myTraining.style.color = "white";
					}
					for (let i = 0; i < flipBox.length; i++)
						flipBox[i].classList.toggle("services-flip-box-dark-theme");

					training.classList.toggle("section-codespaces-develop-night");
				}
				, 7100);
		}
	}

}
