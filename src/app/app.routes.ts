import { Routes } from '@angular/router';
import { ParticipateComponent } from './components/participate/participate.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WhoAreYouComponent } from './components/participate/who-are-you/who-are-you.component';
import { FundraisingPageComponent } from './components/participate/fundraising-page/fundraising-page.component';
import { StartDonationComponent } from './components/participate/start-donation/start-donation.component';
import { ParticipateSummaryComponent } from './components/participate/participate-summary/participate-summary.component';
import { ParticipateCompleteComponent } from './components/participate/participate-complete/participate-complete.component';
import { TeamWhoAreYouComponent } from './components/participate/team-who-are-you/team-who-are-you.component';
import { TeamPageComponent } from './components/participate/team-page/team-page.component';
import { TeamFundraisingPageComponent } from './components/participate/team-fundraising-page/team-fundraising-page.component';
import { TeamStartDonationComponent } from './components/participate/team-start-donation/team-start-donation.component';
import { TeamSummaryComponent } from './components/participate/team-summary/team-summary.component';
import { TeamMemberComponent } from './components/participate/team-member/team-member.component';
import { MemberWhoAreYouComponent } from './components/participate/member-who-are-you/member-who-are-you.component';
import { MemberFundraisingPageComponent } from './components/participate/member-fundraising-page/member-fundraising-page.component';
import { MemberStartDonationComponent } from './components/participate/member-start-donation/member-start-donation.component';
import { MemberSummaryComponent } from './components/participate/member-summary/member-summary.component';

export const routes: Routes = [
  { path: 'participate/how-to-participate', component: ParticipateComponent },
  { path: 'participate/who-are-you', component: WhoAreYouComponent },
  { path: 'participate/fundraising-page', component: FundraisingPageComponent },
  { path: 'participate/start-donation', component: StartDonationComponent },
  { path: 'participate/summary', component: ParticipateSummaryComponent },
  { path: 'participate/complete', component: ParticipateCompleteComponent },
  { path: 'participate/team-who-are-you', component: TeamWhoAreYouComponent },
  { path: 'participate/team-page', component: TeamPageComponent },
  {
    path: 'participate/team-fundraising-page',
    component: TeamFundraisingPageComponent,
  },
  {
    path: 'participate/team-start-donation',
    component: TeamStartDonationComponent,
  },
  { path: 'participate/team-summary', component: TeamSummaryComponent },
  { path: 'participate/team-member', component: TeamMemberComponent },
  {
    path: 'participate/member-who-are-you',
    component: MemberWhoAreYouComponent,
  },
  {
    path: 'participate/member-fundraising-page',
    component: MemberFundraisingPageComponent,
  },
  {
    path: 'participate/member-start-donation',
    component: MemberStartDonationComponent,
  },
  { path: 'participate/member-summary', component: MemberSummaryComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
