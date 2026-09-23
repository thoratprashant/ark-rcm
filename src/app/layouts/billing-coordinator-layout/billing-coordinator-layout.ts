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
        { label: 'Charges and Claims', icon: 'clipboard.svg', route: '/billing-coordinator/charges' },
        { label: 'Manager Hold', icon: 'clock.svg', badge: '14', badgeTone: 'danger' },
      ],
    },
    {
      title: 'Reviews',
      items: [{ label: 'Dialysis Monthly', icon: 'calendar.svg' }],
    },
    {
      title: 'Payment Posting',
      items: [
        { label: 'ERA Review', icon: 'dollar-sign.svg', badge: 'Pending', badgeTone: 'warning' },
        { label: 'Unmatched ERA', icon: 'alert-circle.svg' },
      ],
    },
    {
      title: 'Denials',
      items: [{ label: 'Denials', icon: 'x-circle.svg', badge: '28', badgeTone: 'danger' }],
    },
    {
      title: 'Accounts Receivable',
      items: [
        { label: 'AR Aging', icon: 'bar-chart-2.svg' },
        { label: 'Negative AR', icon: 'minus-circle.svg' },
      ],
    },
    {
      title: 'Insurance',
      items: [{ label: 'Authorizations', icon: 'shield.svg' }],
    },
    {
      title: 'Time Of Service',
      items: [
        { label: 'No-Show', icon: 'user-x.svg' },
        { label: 'Manual Charge', icon: 'plus-square.svg' },
        { label: 'Patient Invoices', icon: 'file-text.svg' },
        { label: 'EOB', icon: 'file.svg' },
      ],
    },
    {
      title: 'Reports',
      items: [{ label: 'Reconciliation', icon: 'trending-up.svg' }],
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
