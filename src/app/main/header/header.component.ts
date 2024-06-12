import { ThemeService } from './../../services/theme.service';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { Location, CommonModule, DOCUMENT } from '@angular/common';
import { filter, Subscription } from 'rxjs';

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

  constructor(
    private router: Router,
    private location: Location,
    private themeService: ThemeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.currentRoute = this.location.path();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.location.path();
    });

    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      console.log('ChoirMainComponent theme subscription');
      this.applyTheme(theme);
    });

    this.applyTheme(localStorage.getItem('theme'));
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  isChoirRoute(): boolean {
    return this.currentRoute.startsWith('/choir');
  }

  isEducationRoute(): boolean {
    return this.currentRoute.startsWith('/education');
  }

  isAboutMeRoute(): boolean {
    return this.currentRoute.startsWith('/about-me');
  }

  toggleTheme(): void {
    this.header.nativeElement.classList.toggle('dark');
    this.themeService.setTheme(this.header.nativeElement.classList.contains('dark') ? 'dark' : 'light');
  }

  private applyTheme(theme: string | null): void {
    const header = this.document.querySelector('div.header');
    if (theme === 'dark') {
      this.renderer.addClass(header, 'dark');
    } else {
      this.renderer.removeClass(header, 'dark');
    }
  }
}
