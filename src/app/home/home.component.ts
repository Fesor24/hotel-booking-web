import { Component, OnInit } from '@angular/core';
import { ICountry } from '../shared/models/country';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries: ICountry[] = [];
  rangeDates!: FormGroup;

  selectedCountry!: any;
  adult: number = 1;
  children: number = 0;
  rooms: number = 1;

  ngOnInit(): void {
    this.rangeDates = new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null)
    });
  }

  incrementItem(item: string) {
    if (item === 'adult') {
      this.adult++;
    }
    if (item === 'children') {
      this.children++;
    }
    if (item === 'room') {
      this.rooms++;
    }
  }

  decrementItem(item: string) {
    if (item === 'adult' && this.adult > 1) {
      this.adult--;
    }
    if (item === 'children' && this.children > 0) {
      this.children--;
    }
    if (item === 'room' && this.rooms > 1) {
      this.rooms--;
    }
  }
}
