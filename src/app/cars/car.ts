export class Car {
  id: number;
  make: string;
  model: string;
  year: number;
  exteriorColor: string;
  interiorColor: string;
  mileage: number;
  bodyType: string;
  doors: number;
  height: number;
  weight: number;
  engine: string;
  rimSize: number;
  price: number;
  fuelEconomy: number;
  imgUrl: string;

  constructor(
    id: number,
    make: string,
    model: string,
    year: number,
    exteriorColor: string,
    interiorColor: string,
    mileage: number,
    bodyType: string,
    doors: number,
    height: number,
    weight: number,
    engine: string,
    rimSize: number,
    price: number,
    fuelEconomy: number,
    imgUrl: string
  ) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.exteriorColor = exteriorColor;
    this.interiorColor = interiorColor;
    this.mileage = mileage;
    this.bodyType = bodyType;
    this.doors = doors;
    this.height = height;
    this.weight = weight;
    this.engine = engine;
    this.rimSize = rimSize;
    this.price = price;
    this.fuelEconomy = fuelEconomy;
    this.imgUrl = imgUrl;
  }
}

export const Audi = [
  new Car(140004,"Audi", "A5", 2022, "Black", "Black", 1000, "Sedan", 4, 182, 1480, "2.0L Turbo", 18, 40000, 22, "assets/cars/Audi/1.jpg"),
  new Car(432630,"Audi", "A6", 2021, "White", "Black", 5000, "Sedan", 4, 185, 1520, "2.0L Turbo", 19, 42000, 20, "assets/cars/Audi/2.jpg"),
  new Car(325107,"Audi", "A7", 2020, "Silver", "Black", 6000, "Sedan", 4, 188, 1600, "3.0L Turbo", 20, 45000, 19, "assets/cars/Audi/3.jpg"),
  new Car(301870,"Audi", "RS7", 2022, "Red", "Black", 500, "Sedan", 4, 183, 1700, "4.0L Turbo", 21, 100000, 15, "assets/cars/Audi/4.jpg"),
  new Car(737993,"Audi", "Q5", 2021, "Silver", "Beige", 3000, "SUV", 4, 186, 1650, "2.0L Turbo", 20, 55000, 18, "assets/cars/Audi/5.jpg"),
  new Car(750923,"Audi", "TT", 2020, "White", "Red", 4000, "Coupe", 2, 189, 1400, "2.0L Turbo", 19, 40000, 22, "assets/cars/Audi/6.jpg"),
  new Car(404091,"Audi", "S5", 2022, "Black", "White", 1000, "Sedan", 4, 181, 1500, "3.0L Turbo", 18, 45000, 20, "assets/cars/Audi/7.jpg"),
  new Car(501180,"Audi", "RS6", 2021, "Blue", "Black", 6000, "Sedan", 4, 184, 1700, "4.0L Turbo", 21, 100000, 15, "assets/cars/Audi/8.jpg"),
  new Car(961630,"Audi", "A4", 2020, "Silver", "Black", 5000, "Sedan", 4, 187, 1440, "2.0L Turbo", 19, 42000, 22, "assets/cars/Audi/9.jpg"),
  new Car(759776,"Audi", "R8", 2022, "Yellow", "Black", 2000, "Coupe", 2, 190, 1600, "5.2L V10", 20, 150000, 16, "assets/cars/Audi/10.jpg")
];

export const Bmw = [
  new Car(280886,"Bmw", "3 Series", 2022, "White", "Black", 1000, "Sedan", 4, 194, 1465, "2.0L Turbo", 20, 41000, 25, "assets/cars/Bmw/1.jpg"),
  new Car(883949,"Bmw", "5 Series", 2022, "Black", "Red", 900, "Sedan", 4, 192, 1510, "3.0L Turbo", 19, 43000, 23, "assets/cars/Bmw/2.jpg"),
  new Car(116671,"Bmw", "7 Series", 2022, "Silver", "Black", 1100, "Sedan", 4, 201, 1620, "4.0L Turbo", 18, 45000, 24, "assets/cars/Bmw/3.jpg"),
  new Car(936492,"Bmw", "X3", 2022, "Gray", "Black", 800, "SUV", 4, 186, 1680, "2.0L Turbo", 21, 39000, 26, "assets/cars/Bmw/4.jpg"),
  new Car(941862,"Bmw", "X5", 2022, "White", "Red", 900, "SUV", 4, 193, 1750, "3.0L Turbo", 20, 42000, 25, "assets/cars/Bmw/5.jpg"),
  new Car(173050,"Bmw", "X7", 2022, "Black", "White", 1200, "SUV", 4, 200, 1850, "4.0L Turbo", 19, 44000, 24, "assets/cars/Bmw/6.jpg"),
  new Car(822045,"Bmw", "Z4", 2022, "Red", "Black", 1000, "Roadster", 2, 185, 1370, "2.0L Turbo", 22, 38000, 27, "assets/cars/Bmw/7.jpg"),
  new Car(315961,"Bmw", "i3", 2022, "Blue", "Black", 700, "Hatchback", 4, 170, 1180, "1.0L Electric", 25, 35000, 30, "assets/cars/Bmw/8.jpg"),
  new Car(545489,"Bmw", "i8", 2022, "Silver", "Black", 900, "Sports", 2, 182, 1390, "1.5L Electric", 24, 40000, 29, "assets/cars/Bmw/9.jpg"),
  new Car(727107,"Bmw", "M4", 2022, "White", "Red", 1200, "Sedan", 4, 201, 1550, "3.0L Turbo", 19, 45000, 24, "assets/cars/Bmw/10.jpg")
];

export const Honda = [
  new Car(501166,"Honda", "Civic", 2022, "Silver", "Black", 1500, "Hatchback", 4, 180, 1450, "1.5L Turbo", 24, 20000, 25, "assets/cars/Honda/1.jpg"),
  new Car(812384,"Honda", "Accord", 2022, "Red", "Black", 1400, "Sedan", 4, 192, 1470, "2.0L Turbo", 26, 21000, 28, "assets/cars/Honda/2.jpg"),
  new Car(205734,"Honda", "CR-V", 2022, "White", "Black", 1700, "SUV", 4, 189, 1485, "1.5L Turbo", 22, 22000, 30, "assets/cars/Honda/3.jpg"),
  new Car(169595,"Honda", "HR-V", 2022, "Blue", "Black", 1600, "SUV", 4, 185, 1475, "1.8L", 20, 23000, 26, "assets/cars/Honda/4.jpg"),
  new Car(536855,"Honda", "Pilot", 2022, "Black", "Black", 2000, "SUV", 8, 201, 1510, "3.5L", 18, 24000, 24, "assets/cars/Honda/5.jpg"),
  new Car(908695,"Honda", "Odyssey", 2022, "Gray", "Black", 1800, "Minivan", 6, 198, 1520, "3.5L", 16, 25000, 22, "assets/cars/Honda/6.jpg"),
  new Car(693395,"Honda", "Passport", 2022, "Gold", "Black", 1700, "SUV", 6, 195, 1505, "3.5L", 20, 26000, 28, "assets/cars/Honda/7.jpg"),
  new Car(864002,"Honda", "Insight", 2022, "Green", "Black", 1300, "Hybrid", 4, 182, 1460, "1.5L Hybrid", 40, 27000, 30, "assets/cars/Honda/8.jpg"),
  new Car(208433,"Honda", "Clarity", 2022, "Orange", "Black", 1600, "Plug-in Hybrid", 4, 188, 1480, "1.5L Plug-in Hybrid", 38, 28000, 27, "assets/cars/Honda/9.jpg"),
  new Car(228620,"Honda", "Fit", 2022, "Purple", "Black", 1200, "Hatchback", 4, 175, 1450, "1.5L", 30, 29000, 25, "assets/cars/Honda/10.jpg")
];

export const Ford = [
  new Car(864625,"Ford", "Mustang", 2022, "Red", "Black", 1350, "Coupe", 4, 250, 1570, "5.0L V8", 20, 40000, 24, "assets/cars/Ford/1.jpg"),
  new Car(864625,"Ford", "EcoSport", 2022, "Silver", "Gray", 800, "SUV", 5, 140, 1740, "1.0L EcoBoost", 25, 25000, 20, "assets/cars/Ford/2.jpg"),
  new Car(837160,"Ford", "F-150", 2022, "White", "Black", 1700, "Truck", 4, 300, 1900, "5.0L V8", 18, 55000, 22, "assets/cars/Ford/3.jpg"),
  new Car(541256,"Ford", "Fusion", 2022, "Blue", "Beige", 1100, "Sedan", 5, 185, 1470, "2.0L EcoBoost", 15, 30000, 23, "assets/cars/Ford/4.jpg"),
  new Car(154296,"Ford", "Explorer", 2022, "Black", "Black", 1600, "SUV", 7, 220, 1950, "3.0L EcoBoost", 17, 44000, 21, "assets/cars/Ford/5.jpg"),
  new Car(629332,"Ford", "Ranger", 2022, "Red", "Black", 1000, "Truck", 4, 150, 1700, "2.3L EcoBoost", 20, 33000, 19, "assets/cars/Ford/6.jpg"),
  new Car(120130,"Ford", "Bronco", 2022, "Green", "Black", 1500, "SUV", 4, 210, 1600, "2.7L EcoBoost", 18, 40000, 22, "assets/cars/Ford/7.jpg"),
  new Car(864924,"Ford", "Edge", 2022, "Silver", "Black", 1100, "SUV", 5, 180, 1570, "2.0L EcoBoost", 16, 34000, 20, "assets/cars/Ford/8.jpg")
]

export const Toyota = [
  new Car(220031,"Toyota", "Camry", 2022, "White", "Gray", 1150, "Sedan", 5, 203, 1630, "2.5L Dynamic Force", 28, 33000, 22, "assets/cars/Toyota/1.jpg"),
  new Car(764949,"Toyota", "Corolla", 2022, "Silver", "Black", 1050, "Sedan", 5, 169, 1520, "1.8L Dynamic Force", 31, 24000, 25, "assets/cars/Toyota/2.jpg"),
  new Car(437180,"Toyota", "Rav4", 2022, "Red", "Black", 1300, "SUV", 5, 219, 1770, "2.5L Dynamic Force", 26, 38000, 21, "assets/cars/Toyota/3.jpg"),
  new Car(306640,"Toyota", "Highlander", 2022, "Blue", "Beige", 1400, "SUV", 7, 295, 1900, "3.5L V6", 20, 45000, 19, "assets/cars/Toyota/4.jpg"),
  new Car(745107,"Toyota", "Tacoma", 2022, "Black", "Black", 1500, "Truck", 4, 278, 1800, "3.5L V6", 19, 35000, 22, "assets/cars/Toyota/5.jpg"),
  new Car(895146,"Toyota", "Tundra", 2022, "White", "Gray", 1700, "Truck", 4, 381, 2000, "5.7L V8", 17, 55000, 20, "assets/cars/Toyota/6.jpg"),
  new Car(327244,"Toyota", "Sienna", 2022, "Silver", "Black", 1300, "Van", 7, 296, 1990, "3.5L V6", 19, 41000, 22, "assets/cars/Toyota/7.jpg"),
  new Car(450441,"Toyota", "C-HR", 2022, "Red", "Black", 1000, "SUV", 5, 144, 1570, "2.0L Dynamic Force", 31, 28000, 26, "assets/cars/Toyota/8.jpg"),
  new Car(942226,"Toyota", "4Runner", 2022, "Green", "Gray", 1500, "SUV", 5, 270, 1700, "4.0L V6", 18, 42000, 22, "assets/cars/Toyota/9.jpg"),
  new Car(687782,"Toyota", "Yaris", 2022, "Blue", "Beige", 800, "Hatchback", 5, 106, 1320, "1.5L Dynamic Force", 36, 22000, 29, "assets/cars/Toyota/10.jpg")
]

export const Mercedes = [
  new Car(847595,"Mercedes", "S-Class", 2022, "White", "Black", 1900, "Sedan", 4, 163, 2130, "6.0L V12", 14, 115000, 18, "assets/cars/Mercedes/1.jpg"),
  new Car(945402,"Mercedes", "C-Class", 2022, "Silver", "Black", 1400, "Sedan", 4, 155, 1730, "2.0L Turbo", 25, 55000, 22, "assets/cars/Mercedes/2.jpg"),
  new Car(807811,"Mercedes", "E-Class", 2022, "Red", "Black", 1600, "Sedan", 4, 169, 1900, "3.0L Turbo", 22, 65000, 20, "assets/cars/Mercedes/3.jpg"),
  new Car(824775,"Mercedes", "GLE-Class", 2022, "Blue", "Beige", 1700, "SUV", 5, 185, 2000, "4.0L Turbo", 19, 75000, 22, "assets/cars/Mercedes/4.jpg"),
  new Car(299582,"Mercedes", "GLC-Class", 2022, "Black", "Black", 1500, "SUV", 5, 140, 1800, "3.0L Turbo", 21, 63000, 21, "assets/cars/Mercedes/5.jpg"),
  new Car(915502,"Mercedes", "GLS-Class", 2022, "White", "Gray", 2000, "SUV", 7, 183, 2300, "5.0L V8", 17, 100000, 20, "assets/cars/Mercedes/6.jpg"),
  new Car(656672,"Mercedes", "Maybach", 2022, "Silver", "Black", 2000, "Sedan", 4, 123, 2500, "6.0L V12", 15, 200000, 19, "assets/cars/Mercedes/7.jpg"),
  new Car(583512,"Mercedes", "AMG GT", 2022, "Red", "Black", 1400, "Coupe", 2, 103, 1700, "4.0L Turbo", 17, 125000, 22, "assets/cars/Mercedes/8.jpg"),
  new Car(906483,"Mercedes", "AMG GT R", 2022, "Green", "Black", 1300, "Coupe", 2, 177, 1700, "4.0L Turbo", 16, 175000, 23, "assets/cars/Mercedes/9.jpg"),
  new Car(827319,"Mercedes", "AMG GT 63 S", 2022, "Blue", "Beige", 1600, "Sedan", 4, 130, 2000, "4.0L Turbo", 15, 200000, 22, "assets/cars/Mercedes/10.jpg")
]

export const Nissan = [
  new Car(941153,"Nissan", "Altima", 2022, "White", "Black", 1200, "Sedan", 5, 188, 1630, "2.5L Dynamic Force", 28, 28000, 24, "assets/cars/Nissan/1.jpg"),
  new Car(355620,"Nissan", "Maxima", 2022, "Silver", "Black", 1300, "Sedan", 4, 200, 1810, "3.5L V6", 21, 39000, 21, "assets/cars/Nissan/2.jpg"),
  new Car(634900,"Nissan", "Sentra", 2022, "Red", "Black", 1000, "Sedan", 5, 149, 1550, "1.8L Dynamic Force", 32, 22000, 26, "assets/cars/Nissan/3.jpg"),
  new Car(922549,"Nissan", "Rogue", 2022, "Blue", "Beige", 1300, "SUV", 5, 185, 1760, "2.5L Dynamic Force", 27, 32000, 23, "assets/cars/Nissan/4.jpg"),
  new Car(788386,"Nissan", "Murano", 2022, "Black", "Black", 1400, "SUV", 5, 260, 1900, "3.5L V6", 20, 43000, 21, "assets/cars/Nissan/5.jpg"),
  new Car(961451,"Nissan", "Pathfinder", 2022, "White", "Gray", 1500, "SUV", 7, 284, 2000, "3.5L V6", 18, 41000, 22, "assets/cars/Nissan/6.jpg"),
  new Car(741313,"Nissan", "Armada", 2022, "Silver", "Black", 1700, "SUV", 7, 190, 2200, "5.6L V8", 17, 55000, 19, "assets/cars/Nissan/7.jpg"),
  new Car(551469,"Nissan", "Kicks", 2022, "Red", "Black", 1100, "SUV", 5, 122, 1500, "1.6L Turbo", 34, 20000, 28, "assets/cars/Nissan/8.jpg"),
  new Car(794788,"Nissan", "GT-R", 2022, "Green", "Black", 1400, "Coupe", 2, 165, 1700, "3.8L V6", 17, 110000, 22, "assets/cars/Nissan/9.jpg"),
  new Car(345446,"Nissan", "LEAF", 2022, "Blue", "Gray", 1000, "Electric", 5, 214, 1600, "Electric", 26, 30000, 23, "assets/cars/Nissan/10.jpg")
]

export const Volkswagen = [
  new Car(909210,"Volkswagen", "Jetta", 2022, "White", "Black", 1100, "Sedan", 5, 147, 1600, "1.4L Turbo", 32, 22000, 26, "assets/cars/Volkswagen/1.jpg"),
  new Car(389130,"Volkswagen", "Passat", 2022, "Silver", "Black", 1200, "Sedan", 4, 174, 1700, "2.0L Turbo", 28, 32000, 24, "assets/cars/Volkswagen/2.jpg"),
  new Car(321885,"Volkswagen", "Arteon", 2022, "Red", "Black", 1300, "Sedan", 4, 268, 1800, "2.0L Turbo", 25, 42000, 22, "assets/cars/Volkswagen/3.jpg"),
  new Car(632171,"Volkswagen", "Atlas", 2022, "Blue", "Beige", 1400, "SUV", 5, 276, 1900, "2.0L Turbo", 24, 42000, 23, "assets/cars/Volkswagen/4.jpg"),
  new Car(260637,"Volkswagen", "Tiguan", 2022, "Black", "Black", 1300, "SUV", 5, 184, 1700, "2.0L Turbo", 27, 32000, 24, "assets/cars/Volkswagen/5.jpg"),
  new Car(296169,"Volkswagen", "Touareg", 2022, "White", "Gray", 1500, "SUV", 5, 340, 2100, "3.0L Turbo", 22, 52000, 21, "assets/cars/Volkswagen/6.jpg"),
  new Car(470542,"Volkswagen", "Golf", 2022, "Silver", "Black", 1000, "Hatchback", 5, 147, 1500, "1.4L Turbo", 32, 22000, 26, "assets/cars/Volkswagen/7.jpg"),
  new Car(548802,"Volkswagen", "Golf GTI", 2022, "Red", "Black", 1100, "Hatchback", 5, 228, 1600, "2.0L Turbo", 28, 32000, 24, "assets/cars/Volkswagen/8.jpg"),
  new Car(844534,"Volkswagen", "Golf R", 2022, "Green", "Black", 1300, "Hatchback", 5, 315, 1700, "2.0L Turbo", 25, 42000, 22, "assets/cars/Volkswagen/9.jpg"),
  new Car(170312,"Volkswagen", "e-Golf", 2022, "Blue", "Gray", 1000, "Electric", 5, 214, 1600, "Electric", 26, 30000, 23, "assets/cars/Volkswagen/10.jpg")
]

export const Bentley = [
  new Car(415681,"Bentley", "Continental GT", 2022, "White", "Black", 1700, "Coupe", 2, 626, 2000, "6.0L W12", 16, 200000, 20, "assets/cars/Bentley/1.jpg"),
  new Car(442207,"Bentley", "Bentayga", 2022, "Silver", "Black", 1900, "SUV", 5, 600, 2300, "6.0L W12", 14, 250000, 19, "assets/cars/Bentley/2.jpg"),
  new Car(340796,"Bentley", "Flying Spur", 2022, "Red", "Black", 1600, "Sedan", 4, 626, 1900, "6.0L W12", 16, 200000, 20, "assets/cars/Bentley/3.jpg"),
  new Car(663882,"Bentley", "Mulsanne", 2022, "Blue", "Beige", 2100, "Sedan", 4, 505, 2500, "6.75L V8", 12, 300000, 18, "assets/cars/Bentley/4.jpg"),
  new Car(250072,"Bentley", "GT", 2022, "Black", "Black", 1700, "Coupe", 2, 626, 2000, "6.0L W12", 16, 200000, 20, "assets/cars/Bentley/5.jpg"),
  new Car(449034,"Bentley", "GTC", 2022, "White", "Gray", 1600, "Cabriolet", 4, 626, 1900, "6.0L W12", 16, 200000, 20, "assets/cars/Bentley/6.jpg"),
  new Car(476205,"Bentley", "Brooklands", 2022, "Silver", "Black", 1700, "Coupe", 4, 530, 1900, "6.75L V8", 14, 250000, 19, "assets/cars/Bentley/7.jpg"),
  new Car(470830,"Bentley", "Azure", 2022, "Red", "Black", 1700, "Convertible", 4, 530, 1900, "6.75L V8", 14, 250000, 19, "assets/cars/Bentley/8.jpg"),
  new Car(776813,"Bentley", "Continental", 2022, "Green", "Black", 1700, "Coupe", 2, 700, 1900, "6.0L W12", 16, 200000, 20, "assets/cars/Bentley/9.jpg"),
  new Car(523790,"Bentley", "Arnage", 2022, "Blue", "Gray", 1700, "Sedan", 4, 450, 1900, "6.75L V8", 14, 250000, 19, "assets/cars/Bentley/10.jpg")
]

export const Subaru = [
  new Car(577117,"Subaru", "Crosstrek", 2022, "Silver", "Black", 1100, "SUV", 5, 152, 1770, "2.0L Boxer", 27, 25000, 24, "assets/cars/Subaru/1.jpg"),
  new Car(239909,"Subaru", "Forester", 2022, "Red", "Black", 1300, "SUV", 5, 182, 1950, "2.5L Boxer", 26, 30000, 22, "assets/cars/Subaru/2.jpg"),
  new Car(798932,"Subaru", "Outback", 2022, "Blue", "Beige", 1400, "Wagon", 5, 182, 1950, "2.5L Boxer", 25, 35000, 21, "assets/cars/Subaru/3.jpg"),
  new Car(716641,"Subaru", "Ascent", 2022, "Black", "Black", 1700, "SUV", 7, 260, 2300, "2.4L Turbo Boxer", 20, 40000, 18, "assets/cars/Subaru/4.jpg"),
  new Car(456196,"Subaru", "Legacy", 2022, "White", "Gray", 1100, "Sedan", 5, 182, 1670, "2.5L Boxer", 29, 20000, 26, "assets/cars/Subaru/5.jpg"),
  new Car(377672,"Subaru", "WRX", 2022, "Silver", "Black", 1300, "Sedan", 4, 268, 1670, "2.0L Turbo Boxer", 22, 30000, 23, "assets/cars/Subaru/6.jpg"),
  new Car(695802,"Subaru", "STI", 2022, "Red", "Black", 1400, "Sedan", 4, 310, 1670, "2.5L Turbo Boxer", 19, 35000, 20, "assets/cars/Subaru/7.jpg"),
  new Car(378748,"Subaru", "BRZ", 2022, "Blue", "Gray", 1100, "Coupe", 2, 205, 1470, "2.0L Boxer", 26, 20000, 25, "assets/cars/Subaru/8.jpg"),
  new Car(238596,"Subaru", "Baja", 2022, "Black", "Black", 1400, "Pickup", 4, 165, 1700, "2.5L Boxer", 24, 25000, 22, "assets/cars/Subaru/9.jpg"),
  new Car(855432,"Subaru", "Impreza", 2022, "White", "Black", 900, "Sedan", 5, 152, 1470, "2.0L Boxer", 29, 20000, 26, "assets/cars/Subaru/10.jpg")
]

export const Volvo = [
  new Car(171102,"Volvo", "S60", 2022, "White", "Black", 1300, "Sedan", 5, 250, 1750, "2.0L T5", 28, 30000, 25, "assets/cars/Volvo/1.jpg"),
  new Car(830595,"Volvo", "V60", 2022, "Silver", "Black", 1400, "Wagon", 5, 250, 1750, "2.0L T5", 27, 35000, 24, "assets/cars/Volvo/2.jpg"),
  new Car(471076,"Volvo", "XC40", 2022, "Red", "Black", 1700, "SUV", 5, 250, 2000, "2.0L T5", 26, 40000, 23, "assets/cars/Volvo/3.jpg"),
  new Car(118562,"Volvo", "XC60", 2022, "Blue", "Beige", 1900, "SUV", 5, 316, 2200, "2.0L T8", 25, 45000, 22, "assets/cars/Volvo/4.jpg"),
  new Car(952622,"Volvo", "XC90", 2022, "Black", "Black", 2300, "SUV", 7, 400, 2500, "2.0L T8", 20, 50000, 19, "assets/cars/Volvo/5.jpg"),
  new Car(288566,"Volvo", "S90", 2022, "White", "Gray", 1700, "Sedan", 5, 250, 1750, "2.0L T5", 28, 30000, 25, "assets/cars/Volvo/6.jpg"),
  new Car(933309,"Volvo", "V90", 2022, "Silver", "Black", 1900, "Wagon", 5, 316, 2000, "2.0L T8", 25, 40000, 22, "assets/cars/Volvo/7.jpg"),
  new Car(516365,"Volvo", "S90 Recharge", 2022, "Red", "Black", 1700, "Sedan", 5, 402, 1700, "2.0L T8 Electric", 25, 60000, 22, "assets/cars/Volvo/8.jpg"),
  new Car(391590,"Volvo", "V90 Recharge", 2022, "Blue", "Beige", 1900, "Wagon", 5, 402, 2000, "2.0L T8 Electric", 22, 65000, 20, "assets/cars/Volvo/9.jpg"),
  new Car(747529,"Volvo", "XC40 Recharge", 2022, "Black", "Black", 1700, "SUV", 5, 402, 1700, "2.0L T8 Electric", 21, 60000, 19, "assets/cars/Volvo/10.jpg")
]
function createCarListing(id:number, make:string, model: string, year: number, exteriorColor: string, interiorColor: string, mileage: number, bodyType: string, doors: number, height: number, weight: number, engine: string, rimSize: number, price: number, fuelEconomy: number, imgUrl: string): Car {
  return new Car(id, make, model, year, exteriorColor, interiorColor, mileage, bodyType, doors, height, weight, engine, rimSize, price, fuelEconomy, imgUrl);
}
