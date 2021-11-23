import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

	constructor(public router : Router) {}

	ngOnInit(): void {
		let torch = document.getElementById('torch');
		document.addEventListener('mousemove',(event : any)=>{
			if(torch){
				torch.setAttribute("top", event.pageY);
				torch.setAttribute("left", event.pageX);
			}
		});
	}
}
