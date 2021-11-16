import {Component, OnInit} from '@angular/core';
import data from '../../assets/data.json';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	public portfolioData : any = data['Portfolio'];

	constructor() {}

	ngOnInit(): void {}

}
