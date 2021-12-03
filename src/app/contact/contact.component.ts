import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit,AfterViewInit {
	public contactData = data['Contact'];
	public snow : Array<number> = [];
	private numberOfSnow : number = 200;

	constructor() {}

	private getRandom = (min : number,max : number) : number =>{
		return Math.random() * (max - min + 1) + min;
	}
	ngOnInit(): void {
		for (let i = 1; i <= this.numberOfSnow; i++) {
			this.snow.push(i);
		}
	}
	ngAfterViewInit() : void{
		let styles : any = document.createElement('style');
		styles.type = 'text/css';
		document.head.appendChild(styles);

		for (const id of this.snow) {
			let snowElement = document.getElementById(`snow-${id}`);
			if (snowElement){
				let height = 100;

				if (screen.width <= 768){
					height += 20;
				}

				let randomX = this.getRandom(0,1000000) * 0.0001;
				let randomOffset = this.getRandom(-100000, 100000) * 0.0001;
				let randomXEnd = randomX + randomOffset;
				let randomXEndYOYO = randomX + randomOffset/2;
				let randomYOYOTime = this.getRandom(30000, 80000) / 100000;
				let randomYOYOY = randomYOYOTime * height;
				let randomScale = this.getRandom(0,10000) * 0.0001;
				let fallDuration = this.getRandom(10, 27);
				let fallDelay = this.getRandom(0,27) * -1;

				let keyframe =
				`@keyframes snow-fall-${id}{
					${randomYOYOTime * 100}%{
						transform : translate(${randomXEnd}vw,${randomYOYOY}vh) scale(${randomScale});
					}
					to {
						transform : translate(${randomXEndYOYO}vw,${height}vh) scale(${randomScale});
					}
				}`;

				styles.sheet!!.insertRule(keyframe,styles.length);

				snowElement.style.opacity = `${this.getRandom(0, 10000) * 0.0001}`;
				snowElement.style.transform = `translate(${randomX}vw,-70px) scale(${randomScale})`;
				snowElement.style.animation = `snow-fall-${id} ${fallDuration}s ${fallDelay}s linear infinite`;
			}
		}
	}
}
