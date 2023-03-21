import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: string = 'dark';
  constructor(private cookieService: CookieService) {
  }

  switchTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.cookieService.delete('theme', '/');
    this.cookieService.set('theme', this.theme, undefined, '/');
  }
}
