import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';

import { CommonService } from './common.service';
import { RulesService } from './rules/rules.service';
import { GroupsService } from './groups/groups.service';
import { EventsService } from './events/events.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    EventsComponent,
    GroupsComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [CommonService, RulesService, GroupsService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
