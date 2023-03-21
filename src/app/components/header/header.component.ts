import {Component, OnChanges, OnInit} from '@angular/core';
import { ThemeService } from '../../shared/theme.service';
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(public themeService: ThemeService, private cookieService: CookieService) {}
  theme = 'dark';

  switchTheme() {
    this.themeService.switchTheme();
  }
}
