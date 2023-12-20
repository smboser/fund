import { Component, ModuleWithProviders } from '@angular/core';
import {
  NgCircleProgressModule,
  CircleProgressOptions,
} from 'ng-circle-progress';

@Component({
  selector: 'app-left-chart',
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
  imports: [NgCircleProgressModule],
  templateUrl: './left-chart.component.html',
  styleUrl: './left-chart.component.scss',
})
export class LeftChartComponent {}
