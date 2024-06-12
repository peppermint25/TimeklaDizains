import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild('header')
  header!: ElementRef;
  currentRoute: string = '';
  isDarkTheme: boolean = false;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.currentRoute = this.location.path();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.location.path();
    });
    localStorage.getItem('theme') === 'dark' ? this.header.nativeElement.classList.add('dark') : this.header.nativeElement.classList.remove('dark');

    if(localStorage.getItem('theme') === 'dark') {
      this.isDarkTheme = true;
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
      this.header.nativeElement.classList.toggle('dark');
      localStorage.setItem('theme', this.header.nativeElement.classList.contains('dark') ? 'dark' : 'light');
    }
}
