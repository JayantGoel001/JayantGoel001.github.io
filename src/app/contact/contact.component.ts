import {Component, OnInit} from '@angular/core';
import data from '../../assets/data.json';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	public contactData : any = data['Contact'];
	constructor() {}

	ngOnInit(): void {}
}
