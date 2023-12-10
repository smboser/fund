import { Component, VERSION, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import {
  switchMap,
  map,
  takeUntil,
  tap,
  pairwise,
  startWith,
} from 'rxjs/operators';

import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
  query,
  group,
  stagger,
} from '@angular/animations';
@Component({
  selector: 'flip-clock',
  templateUrl: './flipclock.component.html',
  styleUrls: ['./flipclock.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('flip', [
      transition('*=>*', [
        animate(
          '.6s',
          keyframes([
            style({ transform: 'rotateX(0deg)', offset: 0 }),
            style({ transform: 'rotateX(-90deg)', offset: 0.5 }),
            style({ transform: 'rotateX(-180deg)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class FlipClock {
  change: boolean = false;
  showShadow = [];
  name = 'Angular ' + VERSION.major;
  initialMinutes$ = new BehaviorSubject(30);
  expired$ = new Subject();

  @Input()
  set minutes(val: any) {
    this.initialMinutes$.next(val);
  }
  value = 0;
  timer$ = this.initialMinutes$.pipe(
    map((minutes) => minutes * 60000 + new Date().getTime()),
    switchMap((minutes) =>
      timer(0, 1000).pipe(
        map((t) => Math.round((minutes - new Date().getTime()) / 1000)),
        tap((seconds) => {
          if (seconds < 0) {
            this.expired$.next(0);
          }
        }),
        takeUntil(this.expired$),
        map((seconds) => ({
          hr: Math.max(Math.floor(seconds / 3600), 0),
          min: Math.max(Math.floor((seconds % 3600) / 60), 0),
          s: seconds % 60,
        })),
        map(({ hr, min, s }) => [
          hr > 9 ? hr.toString() : '0' + hr.toString(),
          min > 9 ? min.toString() : '0' + min.toString(),
          s > 9 ? s.toString() : '0' + s.toString(),
        ]),
        map((val) =>
          val.map((i) => i.split('')).reduce((a, b) => [...a, ...b], [])
        ),
        pairwise(),
        map(([old, value]) => {
          return value.map((x, index) => ({ value: x, old: old[index] }));
        })
      )
    )
  );
}
