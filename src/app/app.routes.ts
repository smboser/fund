import { Routes } from '@angular/router';
import { ParticipateComponent } from './components/participate/participate.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WhoAreYouComponent } from './components/participate/who-are-you/who-are-you.component';

export const routes: Routes = [
  { path: 'participate/how-to-participate', component: ParticipateComponent },
  { path: 'participate/who-are-you', component: WhoAreYouComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
