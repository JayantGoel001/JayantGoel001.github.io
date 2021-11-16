import {Component, OnInit} from '@angular/core';
import data from '../../assets/data.json';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
	public footerData : any = data['Footer'];
	constructor() {}

	ngOnInit(): void {}

}
