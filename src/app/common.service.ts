import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Rule } from './rule';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {

  fieldsData: any;
  channelsData: any;
  groupsData: any;

  constructor(private http: Http) { }

  initialiseFields(){
    if (this.fieldsData) {
      return Observable.of(this.fieldsData);
    } else {
      return this.http.get('assets/fields_init.json')
      .map(res=>res.json().fieldsData)
      .do((data) => {
        this.fieldsData = data.fieldData;
        return this.fieldsData;
      });
    }
  }

  initialiseChannels(){
    if (this.channelsData) {
      return Observable.of(this.channelsData);
    } else {
      return this.http.get('assets/channels_init.json')
      .map(res=>res.json().channelsData)
      .do((data) => {
        this.channelsData = data.channelsData;
        return this.channelsData;
      });
    }
  }

  initialiseGroups(){
    if (this.groupsData) {
      return Observable.of(this.groupsData);
    } else {
      return this.http.get('assets/groups_init.json')
      .map(res=>res.json())
      .do((data) => {
        this.groupsData = data;
        return this.groupsData;
      });
    }
  }
}
