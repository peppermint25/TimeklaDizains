import { ThemeService } from './../../services/theme.service';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header!: ElementRef;
  currentRoute: string = '';
  isDarkTheme: boolean = false;
  private themeSubscription: Subscription | undefined;
  renderer: any;

  constructor(
    private router: Router,
    private location: Location,
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.currentRoute = this.location.path();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.location.path();
    });

    // Subscribe to the theme observable
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.applyTheme(theme);
      this.isDarkTheme = theme === 'dark';
    });

    // Apply initial theme
    this.applyTheme(localStorage.getItem('theme'));
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  // Method to check if the current route starts with 'choir'
  isChoirRoute(): boolean {
    return this.currentRoute.startsWith('/choir');
  }

  // Method to check if the current route starts with 'education'
  isEducationRoute(): boolean {
    return this.currentRoute.startsWith('/education');
  }

  // Method to check if the current route starts with 'about-me'
  isAboutMeRoute(): boolean {
    return this.currentRoute.startsWith('/about-me');
  }

  toggleTheme(): void {
    console.log('Theme toggled');
    const isDark = this.header.nativeElement.classList.toggle('dark');
    this.themeService.setTheme(isDark ? 'dark' : 'light');
  }

  private applyTheme(theme: string | null): void {
    if (theme === 'dark') {
      this.header.nativeElement.classList.add('dark');
    } else {
      this.header.nativeElement.classList.remove('dark');
    }
  }
}
