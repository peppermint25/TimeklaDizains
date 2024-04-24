import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-education-main',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './education-main.component.html',
  styleUrl: './education-main.component.scss'
})
export class EducationMainComponent {

}
