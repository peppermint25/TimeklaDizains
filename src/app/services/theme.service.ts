import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string | null>(localStorage.getItem('theme'));
  theme$ = this.themeSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('storage', this.handleStorageChange.bind(this));
    });
  }

  setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === 'theme') {
      this.ngZone.run(() => {
        this.themeSubject.next(event.newValue);
      });
    }
  }
}
