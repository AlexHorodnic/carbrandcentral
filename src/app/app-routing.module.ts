import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CarComponent} from "./components/car/car.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: ':id', component: CarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
