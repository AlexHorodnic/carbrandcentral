import {Component, OnChanges, OnInit} from '@angular/core';
import {ThemeService} from "./shared/theme.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  constructor(public themeService: ThemeService, private cookieService: CookieService) {}
  title = 'carbrandcentral';

  ngOnInit() {
    if (this.cookieService.get('theme')){
      this.themeService.theme = this.cookieService.get('theme');
    }
  }

  ngOnChanges() {
    if (this.cookieService.get('theme')){
      this.themeService.theme = this.cookieService.get('theme');
    }
  }
}
