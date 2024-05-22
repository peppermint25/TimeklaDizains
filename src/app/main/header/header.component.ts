import { Component, OnInit } from '@angular/core';
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
  currentRoute: string = '';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    // Capture the initial route
    this.currentRoute = this.location.path();
    console.log(this.currentRoute);  // For debugging purposes

    // Subscribe to NavigationEnd events to capture route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.location.path();
      console.log(this.currentRoute);  // For debugging purposes
    });
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
}
