import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router){
    console.log(router.url)
  }


  ngOnInit(): void {
      
  }
}
