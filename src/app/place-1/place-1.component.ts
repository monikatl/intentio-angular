import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IntentionPlace } from '../../IntentionPlace';
import { DataService } from '../../data-service';

@Component({
  selector: 'app-place-1',
  templateUrl: './place-1.component.html',
  styleUrl: './place-1.component.css'
})
export class Place1Component {

  constructor(private dataService: DataService) {}

  place!: IntentionPlace
  intentionPlace = IntentionPlace

  setIntentionPlace(intentionPlace: IntentionPlace) {
    this.place = intentionPlace;
    this.sendDataToPreview()
  }

  sendDataToPreview() {
    const dataToSend =  this.place
    this.dataService.updateIntenitionPlaceData(dataToSend);
  }
}
