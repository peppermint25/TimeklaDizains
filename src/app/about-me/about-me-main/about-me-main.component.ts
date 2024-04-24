import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-me-main',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './about-me-main.component.html',
  styleUrl: './about-me-main.component.scss'
})
export class AboutMeMainComponent {

}
