import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ThemePalette } from '@angular/material/core';
import { ProgressSliderComponent } from '../../../shared/progress-slider/progress-slider.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsComponent } from '../../../shared/dialog-elements/dialog-elements.component';
import { RotateButtonComponent } from '../../../shared/rotate-button/rotate-button.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-team-start-donation',
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    MatIconModule,
    ProgressSliderComponent,
    RotateButtonComponent,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './team-start-donation.component.html',
  styleUrl: './team-start-donation.component.scss',
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
})
export class TeamStartDonationComponent {
  selectedAmount: number | null = null;
  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      amount: ['', [Validators.required]],
    });
  }
  color: ThemePalette = 'warn';
  isShown = true;
  isFwdEnabled = false;
  isBackEnabled = true;
  form!: FormGroup;
  nextForm = 'participate/team-summary';

  ngOnInit() {
    // Initial animation state when the component loads
    this.isShown = true;
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }

  getFormControl(name: string) {
    return this.form.get(name);
  }

  toggle() {
    setTimeout(() => {
      this.isShown = false;
    }, 1600);
  }

  openDialog() {
    this.dialog.open(DialogElementsComponent);
  }
}
