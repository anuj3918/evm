import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  getGroups() {
    return this.http.get('assets/groups.json')
    .map(response => response.json().rulesData);
  }

}
