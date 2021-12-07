import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
declare var data : any;

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	public contactData = data['Contact'];

	constructor() {}

	ngOnInit(): void {}
}
