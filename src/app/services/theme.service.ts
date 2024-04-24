import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDarkTheme = <boolean>(false);

  constructor() { }
}
