import {Component, OnInit} from '@angular/core';
import {
  Audi,
  Bmw,
  Honda,
  Ford,
  Toyota,
  Mercedes,
  Nissan,
  Volkswagen,
  Bentley,
  Subaru,
  Volvo,
  Car
} from '../../cars/car';
import {ActivatedRoute} from "@angular/router";
import {ThemeService} from "../../shared/theme.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})


export class CarComponent implements OnInit{
  cars = [...Audi, ...Bmw, ...Honda, ...Nissan, ...Volkswagen, ...Bentley, ...Subaru, ...Volvo, ...Ford, ...Toyota, ...Mercedes];
  id: string | null;
  carData: any;
  theme = 'dark';

  constructor(private route: ActivatedRoute, public themeService: ThemeService, private cookieService: CookieService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id === Number(this.id)) {
        this.carData = this.cars[i];
        console.log(this.carData)
      }
    }

  }
  ngOnInit(){

  }
}
