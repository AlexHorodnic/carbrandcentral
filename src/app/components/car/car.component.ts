import { Component } from '@angular/core';
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

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})


export class CarComponent {
  cars = [...Audi, ...Bmw, ...Honda, ...Nissan, ...Volkswagen, ...Bentley, ...Subaru, ...Volvo, ...Ford, ...Toyota, ...Mercedes];
  id: string | null;
  carData: any;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id === Number(this.id)) {
        this.carData = this.cars[i];
        console.log(this.carData)
      }
    }

  }
}
