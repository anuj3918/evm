import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RulesService {

  constructor(private http: Http) { }

  getRules() {
    return this.http.get('assets/rules.json')
    .map(response => response.json().rulesData);
    // .map(response => <Rule[]>response.json().rulesData);
  }

}
