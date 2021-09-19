import { Component, OnInit } from '@angular/core';
declare var data : any;

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	public portfolioData = data['Portfolio'];

	constructor() {}

	ngOnInit(): void {}

}
