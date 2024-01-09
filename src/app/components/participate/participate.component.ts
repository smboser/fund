import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ThemePalette } from '@angular/material/core';
import { ProgressSliderComponent } from '../../shared/progress-slider/progress-slider.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsComponent } from '../../shared/dialog-elements/dialog-elements.component';
import { RotateButtonComponent } from '../../shared/rotate-button/rotate-button.component';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-participate',
  standalone: true,
  templateUrl: './participate.component.html',
  styleUrl: './participate.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
  imports: [
    MatRadioModule,
    FormsModule,
    MatIconModule,
    ProgressSliderComponent,
    RotateButtonComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class ParticipateComponent {
  radioForm!: FormGroup;
  nextForm = 'participate/who-are-you';
  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.radioForm = this.fb.group({
      selectedOption: ['', Validators.required],
    });

    const selectedOptionControl = this.radioForm.get('selectedOption');
    if (selectedOptionControl) {
      selectedOptionControl.valueChanges.subscribe((selectedValue) => {
        switch (selectedValue) {
          case 'indi':
            this.nextForm = 'participate/who-are-you';
            break;
          case 'team':
            this.nextForm = 'participate/team-who-are-you';
            break;
          case 'team_mem':
            this.nextForm = 'participate/team-member';
            break;
        }
      });
    }
  }
  color: ThemePalette = 'warn';
  isShown = true;
  isFwdEnabled = false;
  isBackEnabled = true;
  openDialog() {
    this.dialog.open(DialogElementsComponent);
  }

  toggle() {
    setTimeout(() => {
      this.isShown = false;
    }, 1600);
  }

  get selectedOption() {
    return this.radioForm.get('selectedOption');
  }
}
