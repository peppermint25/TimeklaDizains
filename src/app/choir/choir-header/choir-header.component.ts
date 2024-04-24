import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-choir-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './choir-header.component.html',
  styleUrl: './choir-header.component.scss'
})
export class ChoirHeaderComponent {

}
