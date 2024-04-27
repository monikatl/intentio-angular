import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IntentionPlace } from '../../../IntentionPlace';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-place-1',
  templateUrl: './place-1.component.html',
  styleUrl: './place-1.component.css'
})
export class Place1Component {

  constructor(private dataService: DataService) {}

  place!: IntentionPlace
  intentionPlace = IntentionPlace
  isHelpNeeded: boolean = false;
  helpText: string = "";

  toggleHelpNeeded() {
    this.isHelpNeeded = !this.isHelpNeeded;
  }

  showHelp(intentionPlace: IntentionPlace) {
    this.toggleHelpNeeded()
    switch ( intentionPlace ) {
      case IntentionPlace.MASS:
          this.helpText = "Twoja intencja zostanie odprawiona podczas jednej z mszy świętych odbywających się w parafii.";
          break;
      case IntentionPlace.SERVICE:
          this.helpText = "Możesz dołączyć swoją intencję do zbiorowej intencji nabożeństwa odbywającego się w danym okresie liturgicznym.";
          break;
      case IntentionPlace.MEMORIAL:
          this.helpText = "Imię i nazwisko osoby zmarłej zostanie dodane do czytanych co tygodniowo wypominków.";
          break;
      default: 
          this.helpText = "";
          break;
   }
  }

  setIntentionPlace(intentionPlace: IntentionPlace) {
    this.place = intentionPlace;
    this.sendDataToPreview()
  }

  sendDataToPreview() {
    const dataToSend =  this.place
    this.dataService.updateIntenitionPlaceData(dataToSend);
  }
}
