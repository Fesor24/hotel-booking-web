import { Component } from '@angular/core';
import { ICountry } from '../shared/models/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  countries: ICountry[] = [];
  rangeDates: any;

  selectedCountry!: any;
}
