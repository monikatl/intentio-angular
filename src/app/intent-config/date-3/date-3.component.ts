import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { MassesDataService } from '../../services/masses-data-service';
import { Mass } from '../../mass';
import { MassesRepository } from '../../../MassesRepository';
import { Hour, Kind, ScheduleMass } from '../../schedule-mass';


@Component({
  selector: 'app-date-3',
  templateUrl: './date-3.component.html',
  styleUrl: './date-3.component.css'
})
export class Date3Component implements OnInit {

  constructor(private dataService: DataService, private massesDataService: MassesDataService) {}
  
  date!: string;

  masses: Mass[] = []

  selectedMass!: Mass;

  ngOnInit(): void {
    this.massesDataService.loadData()
    this.masses = this.massesDataService.getData()
  }

  sendDataToPreview() {
    const dataToSend =  "24 marca 2025 roku"
    this.dataService.updateIntenitionDateData(dataToSend);
  }

  onSelectionMassChange() {
    this.dataService.updateIntenitionDateData(this.selectedMass.getMassDate())
  }

}
