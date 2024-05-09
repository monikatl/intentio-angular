import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';
import { EventsDataService } from '../../services/events-data-service';
import { IEvent } from '../../../IEvents';
import { IntentionPlace } from '../../../IntentionPlace';
import { MassesRepository } from '../../../MassesRepository';
import { ServicesRepository } from '../../../ServicesRepository';
import { MemorialRepository } from '../../../MemorialRepository';


@Component({
  selector: 'app-date-3',
  templateUrl: './date-3.component.html',
  styleUrl: './date-3.component.css'
})
export class Date3Component implements OnInit {

  constructor(private dataService: DataService, private eventsDataService: EventsDataService) {

  }
  
  date!: string;

  events: IEvent[] = []

  selectedEvent!: IEvent;

  ngOnInit(): void {
    this.events = this.eventsDataService.loadData(this.resolveRepository())
  }

  onSelectionEventChange() {
    this.dataService.updateIntenitionDateData(this.selectedEvent.getDate())
  }

  resolveRepository() {
    let place = this.dataService.getIntentionPlace()
    console.log(place);
    switch(place) {
      case IntentionPlace.MASS:
        return new MassesRepository();
      case IntentionPlace.SERVICE:
        return new ServicesRepository();
      case IntentionPlace.MEMORIAL:
        return new MemorialRepository();
    }
  }
}


