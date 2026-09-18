import { Component, OnDestroy, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-locked',
  imports: [RouterLink],
  templateUrl: './account-locked.html',
  styleUrl: './account-locked.scss',
})
export class AccountLocked implements OnDestroy {
  private readonly remainingSeconds = signal(14 * 60 + 47);
  private readonly timerId = window.setInterval(() => {
    this.remainingSeconds.update((seconds) => Math.max(seconds - 1, 0));

    if (this.remainingSeconds() === 0) {
      window.clearInterval(this.timerId);
    }
  }, 1000);

  protected readonly minutes = computed(() => this.formatTime(Math.floor(this.remainingSeconds() / 60)));
  protected readonly seconds = computed(() => this.formatTime(this.remainingSeconds() % 60));
  protected readonly isUnlocked = computed(() => this.remainingSeconds() === 0);

  ngOnDestroy(): void {
    window.clearInterval(this.timerId);
  }

  private formatTime(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
