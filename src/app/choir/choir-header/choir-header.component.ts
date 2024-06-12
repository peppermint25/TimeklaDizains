import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-choir-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './choir-header.component.html',
  styleUrl: './choir-header.component.scss'
})
export class ChoirHeaderComponent implements OnInit, OnDestroy{
  private themeSubscription: Subscription | undefined;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    console.log('ChoirHeaderComponent initialized');
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      console.log('ChoirHeaderComponent theme subscription');
      this.applyTheme(theme);
    });

    // Apply initial theme
    this.applyTheme(localStorage.getItem('theme'));
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  private applyTheme(theme: string | null): void {
    const subNavbar = this.document.querySelector('div.sub-navbar');
    if (theme === 'dark') {
      this.renderer.addClass(subNavbar, 'dark');
    } else {
      this.renderer.removeClass(subNavbar, 'dark');
    }
  }

}
