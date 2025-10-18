import { Component, signal } from '@angular/core';
import { CoreModule } from './core/core-module';
import { FeaturesModule } from './features/features-module';
import { SharedModule } from './shared/shared-module';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    CoreModule,
    FeaturesModule,
    SharedModule,
    RouterOutlet,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todolist-track');
  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle('dark-theme', this.darkMode);
  }
}
