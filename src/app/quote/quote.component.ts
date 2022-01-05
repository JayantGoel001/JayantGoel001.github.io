import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	public quoteData = this.getRandomValue(data['Quote']);
	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	public getRandomValue(e : any) {
		return Array.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e;
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}
}
