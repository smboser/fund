// circular-progress-bar.component.ts

import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-circular-progress-bar',
  standalone: true,
  template: `
    <div class="circular-progress-bar" [@rotate]="percentage">
      <div class="progress"></div>
    </div>
  `,
  styleUrls: ['./circular-progress-bar.component.scss'],
  animations: [
    trigger('rotate', [
      state('0', style({ transform: 'rotate(0deg)' })),
      transition('* => *', animate('500ms ease-out')),
    ]),
  ],
})
export class MyCircularProgressBarComponent {
  @Input() percentage: number = 0;
}
