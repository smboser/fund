import { Routes } from '@angular/router';
import { ParticipateComponent } from './components/participate/participate.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  { path: 'participate/how-to-participate', component: ParticipateComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
