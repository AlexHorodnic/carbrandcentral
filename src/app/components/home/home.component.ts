import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, OnChanges {
  cars = [...Audi, ...Bmw, ...Honda, ...Nissan, ...Volkswagen, ...Bentley, ...Subaru, ...Volvo, ...Ford, ...Toyota, ...Mercedes];
  carMakes = ['Audi', 'Bmw', 'Honda', 'Nissan', 'Volkswagen', 'Bentley', 'Subaru', 'Volvo', 'Ford', 'Toyota', 'Mercedes']
  theme = 'dark';
  shuffledCarsArray: Car[] = [];
  itemsPerPage = 8;
  currentPage = 1;
  totalPages = 0;
  selectedCar: string = 'All';

  allCarMakes: string = 'All';
  ngOnInit() {
    this.shuffledCarsArray = this.shuffledCars();
    this.totalPages = Math.ceil(this.shuffledCarsArray.length / this.itemsPerPage);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    const screenWidth = event.target.innerWidth;
    if (screenWidth >= 1200) {
      this.itemsPerPage = 8;
    } else if (screenWidth >= 992) {
      this.itemsPerPage = 6;
    } else if (screenWidth >= 768) {
      this.itemsPerPage = 4;
    } else {
      this.itemsPerPage = 4;
    }
  }

  shuffledCars(carMake?: string): Car[] {
    this.selectedCar = this.allCarMakes;
    let carsToShuffle = this.cars;

    if (carMake) {
      carsToShuffle = carsToShuffle.filter(car => car.make === carMake);
    }

    const shuffledCarsArray = carsToShuffle
      .map(car => ({sort: Math.random(), value: car}))
      .sort((a, b) => a.sort - b.sort)
      .map(car => car.value);

    this.shuffledCarsArray = shuffledCarsArray;
    this.currentPage = 1;
    this.totalPages = this.getTotalPages();

    return shuffledCarsArray;

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['shuffledCarsArray'] || changes['itemsPerPage']) {
      this.totalPages = Math.ceil(this.shuffledCarsArray.length / this.itemsPerPage);
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    }
  }
  getPages() {
    // @ts-ignore
    const totalPages = Math.ceil(this.shuffledCarsArray.length / this.itemsPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  onFilterButtonClick(specificCarMake: string): void {
    this.currentPage = 1;
    this.shuffledCars(specificCarMake);
    this.totalPages = this.getTotalPages();
    this.selectedCar = specificCarMake;
  }
  getTotalPages(): number {
    return Math.ceil(this.shuffledCarsArray.length / this.itemsPerPage);
  }
}
