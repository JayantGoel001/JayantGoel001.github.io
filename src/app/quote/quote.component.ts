import {Component, OnInit} from '@angular/core';
import data from '../../assets/data.json';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	public quoteData : any = data['Quote'];
	constructor() { }

	ngOnInit(): void {
		fetch("https://api.quotable.io/random?minLength=25&&maxLength=120&&tags=technology|science|future").then(r => {
			if(r.status === 200){
				r.json().then(data =>{
					this.quoteData['quote'] = data.content;
					this.quoteData['author'] = data.author;
				});
			}
		});
	}
}
