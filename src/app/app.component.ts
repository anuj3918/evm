import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	init_fields: any;
	init_channels: any;
	init_groups: any;


	constructor(private commonService: CommonService){}

	ngOnInit() {
		this.commonService.initialiseFields()
		.subscribe((data) => {
			this.init_fields = data;
		});

		this.commonService.initialiseChannels()
		.subscribe((data) => {
			this.init_channels = data;
		});

		this.commonService.initialiseGroups()
		.subscribe((data) => {
			this.init_groups = data;
		});
  }
}
