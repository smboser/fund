import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-rotate-button',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatTooltipModule],
  templateUrl: './rotate-button.component.html',
  styleUrl: './rotate-button.component.scss',
})
export class RotateButtonComponent {
  isRotated: boolean = false;
  @Input() isBack = false;
  @Input() navigate = '/';
  @Output() handleClick = new EventEmitter<boolean>();
  @Input() isEnabled = true;

  constructor(private router: Router) {}

  rotateArrow() {
    this.isRotated = !this.isRotated;
  }

  navigateTo() {
    this.handleClick.emit();
    setTimeout(() => {
      this.router.navigate([this.navigate]);
    }, 2000);
  }
}
