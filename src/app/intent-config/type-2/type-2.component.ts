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

  setIntentionType(intentionType: IntentionType) {
    this.type = intentionType;
    this.sendDataToPreview()
  }

  sendDataToPreview() {
    const dataToSend =  this.type
    this.dataService.updateIntenitionTypeData(dataToSend);
  }

  


}
