import { Component } from '@angular/core';
import { IntentionType } from '../../IntentionType';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-type-2',
  templateUrl: './type-2.component.html',
  styleUrl: './type-2.component.css'
})
export class Type2Component {

  constructor(private dataService: DataService) {}

  type!: IntentionType
  intentionType = IntentionType

  isHelpNeeded: boolean = false;
  helpText: string = "";

  toggleHelpNeeded() {
    this.isHelpNeeded = !this.isHelpNeeded;
  }

  showHelp(intentionPlace: IntentionType) {
    this.toggleHelpNeeded()
    switch ( intentionPlace ) {
      case IntentionType.INDIVIDUAL:
          this.helpText = "Twoja intencja zostanie odprawiona przez kapłana jako jedyna.";
          break;
      case IntentionType.INSTITUTIONAL:
          this.helpText = "Intenja zostanie dołączona do zbioru intencji.";
          break;
      case IntentionType.GREGORIAN:
          this.helpText = "30 Mszy Świętych odprawianych w kolejnych dniach w intencji zmarłego";
          break;
      default: 
          this.helpText = "";
          break;
   }
  }

  setIntentionType(intentionType: IntentionType) {
    this.type = intentionType;
    this.sendDataToPreview()
  }

  sendDataToPreview() {
    const dataToSend =  this.type
    this.dataService.updateIntenitionTypeData(dataToSend);
  }

  


}
