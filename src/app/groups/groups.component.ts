import { Component, OnInit } from '@angular/core';
import { GroupsService } from './groups.service';

@Component({
	selector: 'app-groups',
	templateUrl: './groups.component.html',
	styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

	all_groups = [];
	
	constructor(private groupsService: GroupsService) { }

	ngOnInit() {
		this.groupsService.getGroups()
		.subscribe(data => this.all_groups = data);
	}

	updateGroup() {}
	selectGroup() {}

}
