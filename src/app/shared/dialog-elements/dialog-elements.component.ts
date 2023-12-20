import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { DONATE_BTN, FUND_BTN } from '../../utils/const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-elements',
  standalone: true,
  templateUrl: './dialog-elements.component.html',
  styleUrl: './dialog-elements.component.scss',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatIconModule,
    CustomButtonComponent,
  ],
})
export class DialogElementsComponent {
  donateBtn = DONATE_BTN;
  fndBtn = FUND_BTN;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DialogElementsComponent>
  ) {}

  backToHome() {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
}
