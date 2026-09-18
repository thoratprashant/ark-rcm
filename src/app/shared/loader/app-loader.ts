import { Component, inject } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.html',
  styleUrl: './app-loader.scss',
})
export class AppLoader {
  protected readonly loader = inject(LoaderService);
}
