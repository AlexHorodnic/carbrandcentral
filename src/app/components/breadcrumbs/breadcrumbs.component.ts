import {Component, Input} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ThemeService} from "../../shared/theme.service";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent {
  breadcrumbs: { label: string, url: string }[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public themeService: ThemeService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = [];
        let currentRoute = this.activatedRoute.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
          const breadcrumb = {
            label: currentRoute.snapshot.data['breadcrumb'],
            url: currentRoute.snapshot.url.map(segment => segment.path).join('/')
          };

          this.breadcrumbs.push(breadcrumb);
          console.log(this.breadcrumbs)
        }
      }
    });

  }
}
