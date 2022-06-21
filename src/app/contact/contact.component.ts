import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;
declare var particlesJS : any;

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	public contactData = data['Contact'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		particlesJS.load('particles-js2');
		this.changeDetectorRef.detectChanges();
	}
}
