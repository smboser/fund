import { Component } from '@angular/core';
import { TopPanelComponent } from '../top-panel/top-panel.component';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { DONATE_BTN, FUND_BTN } from '../../utils/const';
import { FlipClock } from '../../shared/flipclock/flipclock.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { LeftMenuComponent } from '../left-panel/left-menu/left-menu.component';
import { LeftChartComponent } from '../left-panel/left-chart/left-chart.component';
import { ReadMoreComponent } from '../../shared/read-more/read-more.component';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { Router } from '@angular/router';
import { FundraisersComponent } from '../fundraisers/fundraisers.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    TopPanelComponent,
    CustomButtonComponent,
    FlipClock,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    LeftMenuComponent,
    LeftChartComponent,
    ReadMoreComponent,
    LeftPanelComponent,
    FundraisersComponent,
  ],
})
export class HomePageComponent {
  donateBtn = DONATE_BTN;
  fndBtn = FUND_BTN;
  constructor(private router: Router) {}

  navigateToParticipate() {
    this.router.navigate(['/participate/how-to-participate']);
  }
}
