import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ChoirHeaderComponent } from '../choir-header/choir-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-choir-main',
  standalone: true,
  imports: [ChoirHeaderComponent, RouterOutlet],
  templateUrl: './choir-main.component.html',
  styleUrl: './choir-main.component.scss'
})
export class ChoirMainComponent implements OnInit{
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
    if (theme === 'dark') {
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }
}
