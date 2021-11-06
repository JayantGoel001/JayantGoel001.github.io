import {Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	public quoteData = data['Quote'];
	constructor() { }

	ngOnInit(): void {}

}
