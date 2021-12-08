import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	public quoteData = data['Quote'];
	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		fetch("https://api.quotable.io/random?minLength=25&&maxLength=120&&tags=technology|science|future").then(r => {
			if(r.status === 200){
				r.json().then(data =>{
					this.quoteData['quote'] = data.content;
					this.quoteData['author'] = data.author;
					this.changeDetectorRef.detectChanges();
				});
			}
		});
	}
}
