import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  imports: [AsyncPipe, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {
  protected readonly content$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.content$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => {
        const childData = this.route.firstChild?.snapshot.data;
        const title = childData?.['title'] ?? 'Revenue Cycle Management|Simplified.';
        const copy =
          childData?.['copy'] ??
          'Modern billing workflows, clear visibility, and confident cash flow - built for healthcare teams.';

        return {
          title: String(title).split('|'),
          copy: String(copy),
          compactContent: Boolean(childData?.['compactContent']),
        };
      }),
    );
  }
}
