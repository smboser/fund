import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Input() btnIcon: string = 'favorite';
  @Input() btnColor: string = 'primary';
  @Input() btnType: string = 'primary';
  // @Input() btnText: string = 'button';
}
