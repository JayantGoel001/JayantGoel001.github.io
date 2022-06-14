import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-social',
	templateUrl: './social.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./social.component.css']
})

export class SocialComponent implements OnInit {
	public socialData = data['Social'];
	@Input() color : String = "black";

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

}
