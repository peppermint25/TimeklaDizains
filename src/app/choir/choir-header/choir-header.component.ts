import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-choir-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './choir-header.component.html',
  styleUrl: './choir-header.component.scss'
})
export class ChoirHeaderComponent implements OnInit, OnDestroy{
  storageSubscription: any;

  ngOnInit(): void {
    console.log('ChoirHeaderComponent initialized');
    this.updateTheme();

    this.storageSubscription = window.addEventListener('storage', (event) => {
      if (event.key === 'theme') {
        this.updateTheme();
      }
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageSubscription);
  }

  updateTheme(): void {
    localStorage.getItem('theme') === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }

}
