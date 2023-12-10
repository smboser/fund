import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    LeftPanelComponent,
    TopPanelComponent,
    HomePageComponent,
  ],
})
export class AppComponent {
  title = 'fundraiser';
}
