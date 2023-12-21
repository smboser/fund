import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import {
  NgCircleProgressModule,
  CircleProgressOptions,
} from 'ng-circle-progress';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { DONATE_BTN, FUND_BTN } from '../../utils/const';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftChartComponent } from './left-chart/left-chart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  providers: [
    (
      NgCircleProgressModule.forRoot({
        backgroundPadding: 7,
        radius: 60,
        space: -2,
        outerStrokeWidth: 2,
        outerStrokeColor: '#808080',
        innerStrokeColor: '#e7e8ea',
        innerStrokeWidth: 2,
        titleFontSize: '18',
        subtitleFontSize: '14',
        animateTitle: true,
        animationDuration: 1000,
        showUnits: false,
        clockwise: false,
      }) as ModuleWithProviders<NgCircleProgressModule>
    ).providers!,
  ],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss',
  imports: [
    NgCircleProgressModule,
    CustomButtonComponent,
    LeftMenuComponent,
    LeftChartComponent,
  ],
})
export class LeftPanelComponent implements OnInit {
  constructor(private router: Router) {}
  options = new CircleProgressOptions();
  primary: any;
  donateBtn = DONATE_BTN;
  fndBtn = FUND_BTN;
  ngOnInit(): void {
    //this.options.percent = 0;
    //this.options.percent = 75;
  }

  navigateToParticipate() {
    this.router.navigate(['/participate/how-to-participate']);
  }
}
