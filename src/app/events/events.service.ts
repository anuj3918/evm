import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EventsService {

  constructor(private http: Http) { }

  getEvents() {
    return this.http.get('assets/events.json')
    .map(response => response.json().rulesData);
  }

}
