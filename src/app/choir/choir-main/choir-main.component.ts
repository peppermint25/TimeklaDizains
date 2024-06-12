import { Component, OnInit, OnDestroy, Renderer2, Inject, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ChoirHeaderComponent } from '../choir-header/choir-header.component';
import { RouterOutlet } from '@angular/router';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-choir-main',
  standalone: true,
  imports: [ChoirHeaderComponent, RouterOutlet],
  templateUrl: './choir-main.component.html',
  styleUrl: './choir-main.component.scss'
})
export class ChoirMainComponent implements OnInit{
  private themeSubscription: Subscription | undefined;
  theme: string | null = localStorage.getItem('theme');
  @ViewChild('body') header!: ElementRef;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    console.log('ChoirMainComponent initialized');
    
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      console.log('ChoirMainComponent theme subscription');
      console.log('Theme: ', theme);
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
      this.header.nativeElement.classList.add('dark');
    } else {
      this.header.nativeElement.classList.remove('dark');
    }
  }
}
