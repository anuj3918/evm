import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];

export const AppRoutes = [
  RouterModule.forRoot(appRoutes)
]