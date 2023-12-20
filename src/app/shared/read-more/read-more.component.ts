// read-more.component.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-read-more',
  template: `
    <div *ngIf="!isExpanded">
      <div>
        {{ text | slice : 0 : maxLength }}
      </div>
      <div
        *ngIf="text.length > maxLength"
        (click)="toggleReadMore()"
        class="flex items-center justify-center border-t-2 border-solid border-[#d8d8d8]-300 pt-2"
      >
        <a class="flex items-center justify-center"
          >Read More <mat-icon>keyboard_arrow_down</mat-icon></a
        >
      </div>
    </div>
    <div *ngIf="isExpanded">
      {{ text }}
      <span (click)="toggleReadMore()"
        ><a class="flex items-center justify-center"
          >Read Less <mat-icon>keyboard_arrow_up</mat-icon></a
        ></span
      >
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTooltipModule, MatIconModule],
})
export class ReadMoreComponent {
  @Input() text: string = '';
  @Input() maxLength: number = 100;

  isExpanded: boolean = false;

  toggleReadMore(): void {
    console.log('isExpanded', this.isExpanded);
    this.isExpanded = !this.isExpanded;
  }
}
