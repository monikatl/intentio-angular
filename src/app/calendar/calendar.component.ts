import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  month: number[];

  constructor() {
    this.month = Array(31).fill(1).map((x, i)=> i + 1)
  }

}
