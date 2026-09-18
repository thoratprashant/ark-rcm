import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLoader } from './shared/loader/app-loader';

@Component({
  imports: [RouterOutlet, AppLoader],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rcm');
}
