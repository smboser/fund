import { Routes } from '@angular/router';
import { ParticipateComponent } from './components/participate/participate.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WhoAreYouComponent } from './components/participate/who-are-you/who-are-you.component';
import { FundraisingPageComponent } from './components/participate/fundraising-page/fundraising-page.component';
import { StartDonationComponent } from './components/participate/start-donation/start-donation.component';
import { ParticipateSummaryComponent } from './components/participate/participate-summary/participate-summary.component';
import { ParticipateCompleteComponent } from './components/participate/participate-complete/participate-complete.component';

export const routes: Routes = [
  { path: 'participate/how-to-participate', component: ParticipateComponent },
  { path: 'participate/who-are-you', component: WhoAreYouComponent },
  { path: 'participate/fundraising-page', component: FundraisingPageComponent },
  { path: 'participate/start-donation', component: StartDonationComponent },
  { path: 'participate/summary', component: ParticipateSummaryComponent },
  { path: 'participate/complete', component: ParticipateCompleteComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
