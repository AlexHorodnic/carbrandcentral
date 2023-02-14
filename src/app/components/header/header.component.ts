import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  theme = 'dark';

  switchTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
