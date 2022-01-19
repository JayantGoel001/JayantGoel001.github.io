import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	public portfolioData = data['Portfolio'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

}
