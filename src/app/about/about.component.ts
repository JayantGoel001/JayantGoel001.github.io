import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit,AfterViewInit {
	public aboutData = data["About"];
	public activeTab = "story";
	public selector : any;

	constructor(public changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}
	ngAfterViewInit() {
		this.changeActiveTab(this.activeTab);
	}

	public changeActiveTab(id : string) {
		const activeElement = document.getElementById(id+'-tab')!!;

		if(!this.selector){
			this.selector = document.getElementById('selector');
		}
		this.selector.style.width = `${activeElement.offsetWidth}px`;
		this.selector.style.left = `${activeElement.offsetLeft}px`;

		this.activeTab = id;
		this.changeDetectorRef.detectChanges();
	}
}
