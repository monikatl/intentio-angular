import { Component } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-date-3',
  templateUrl: './date-3.component.html',
  styleUrl: './date-3.component.css'
})
export class Date3Component {

  constructor(private dataService: DataService) {}

  date!: string;

  sendDataToPreview() {
    const dataToSend =  "24 marca 2025 roku"
    this.dataService.updateIntenitionDateData(dataToSend);
  }

}
