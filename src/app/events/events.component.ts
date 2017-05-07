import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	all_events = [];

	constructor(private eventsService: EventsService) { }

	ngOnInit() {
		this.eventsService.getEvents().subscribe((data) => {
			this.all_events = data;
		});
	}

	createEvent() {}
	updateEvent() {}
	selectEvent() {}
	deleteEvent() {}

}
