import {Component, OnChanges, OnInit} from '@angular/core';
import {ThemeService} from "../../shared/theme.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  theme = 'dark';
  constructor(public themeService: ThemeService, private cookieService: CookieService) {}

}
