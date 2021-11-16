import {Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
	public trainingData = data['Training'];

	public training = document.getElementById("training");
	public flipBox = document.getElementsByClassName("training-flip-box");
	public myTraining = document.getElementById("my-training");

	constructor() {  }

	ngOnInit(): void {
		setInterval(() => {
			if(this.myTraining) {
				this.myTraining.style.color == "white" ? (this.myTraining.style.color = "black") : (this.myTraining.style.color = "white");
			}
			for (let i = 0; i < this.flipBox.length; i++) {
				this.flipBox[i].classList.toggle("training-flip-box-dark-theme");
			}
			if (this.training) {
				this.training.classList.toggle("training-section-night");
			}
		}, 7100);
	}
}
