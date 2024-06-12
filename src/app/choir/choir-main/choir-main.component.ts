import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
      localStorage.getItem('theme') === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }
}
