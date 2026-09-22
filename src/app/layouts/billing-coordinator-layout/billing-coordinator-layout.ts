import { Component, HostListener, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

type NavItem = {
  label: string;
  icon: string;
  route?: string;
  badge?: string;
  badgeTone?: 'danger' | 'warning';
  arrow?: boolean;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

@Component({
  selector: 'app-billing-coordinator-layout',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './billing-coordinator-layout.html',
  styleUrl: './billing-coordinator-layout.scss',
})
export class BillingCoordinatorLayout {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly sidebarOpen = signal(false);
  protected readonly pageTitle$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    startWith(null),
    map(() => String(this.route.firstChild?.snapshot.data['title'] ?? 'Charges Listing')),
  );

  protected readonly navSections: NavSection[] = [
    {
      title: 'Charges & Claims',
      items: [
        { label: 'Charges and Claims', icon: 'clipboard.svg', route: '/billing-coordinator/charges', arrow: true },
        { label: 'Manager Hold', icon: 'clock.svg', badge: '14', badgeTone: 'danger' },
      ],
    },
    {
      title: 'Reviews',
      items: [{ label: 'Dialysis Monthly', icon: 'calendar.svg', arrow: true }],
    },
    {
      title: 'Payment Posting',
      items: [
        { label: 'ERA Review', icon: 'dollar-sign.svg', badge: 'Pending', badgeTone: 'warning' },
        { label: 'Unmatched ERA', icon: 'alert-circle.svg', arrow: true },
      ],
    },
    {
      title: 'Denials',
      items: [{ label: 'Denials', icon: 'x-circle.svg', badge: '28', badgeTone: 'danger' }],
    },
    {
      title: 'Accounts Receivable',
      items: [
        { label: 'AR Aging', icon: 'bar-chart-2.svg', arrow: true },
        { label: 'Negative AR', icon: 'minus-circle.svg', arrow: true },
      ],
    },
    {
      title: 'Insurance',
      items: [{ label: 'Authorizations', icon: 'shield.svg', arrow: true }],
    },
    {
      title: 'Time Of Service',
      items: [
        { label: 'No-Show', icon: 'user-x.svg', arrow: true },
        { label: 'Manual Charge', icon: 'plus-square.svg', arrow: true },
        { label: 'Patient Invoices', icon: 'file-text.svg', arrow: true },
        { label: 'EOB', icon: 'file.svg', arrow: true },
      ],
    },
    {
      title: 'Reports',
      items: [{ label: 'Reconciliation', icon: 'trending-up.svg', arrow: true }],
    },
  ];

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth >= 992) {
      this.sidebarOpen.set(false);
    }
  }
}
