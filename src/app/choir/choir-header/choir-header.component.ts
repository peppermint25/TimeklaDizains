import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-choir-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './choir-header.component.html',
  styleUrl: './choir-header.component.scss'
})
export class ChoirHeaderComponent implements OnInit, OnDestroy{

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('ChoirHeaderComponent initialized');
    this.applyTheme(localStorage.getItem('theme'));

    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.handleStorageChange.bind(this));
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === 'theme') {
      this.applyTheme(event.newValue);
    }
  }

  private applyTheme(theme: string | null): void {
    if (theme === 'dark') {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

}
