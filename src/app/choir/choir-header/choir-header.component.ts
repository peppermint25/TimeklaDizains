import { Component, OnInit, OnDestroy, Renderer2, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class ChoirHeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  private themeSubscription!: Subscription;
  @ViewChild('sub-navbar') header!: ElementRef;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    console.log('ChoirHeaderComponent initialized');
  }

  ngAfterViewInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      console.log('ChoirHeaderComponent theme subscription', theme);
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
