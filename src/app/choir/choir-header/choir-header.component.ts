import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-choir-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './choir-header.component.html',
  styleUrl: './choir-header.component.scss'
})
export class ChoirHeaderComponent implements OnInit{
  
  ngOnInit(): void {
      localStorage.getItem('theme') === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }

}
