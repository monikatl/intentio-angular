import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-content-4-names',
  templateUrl: './content-4-names.component.html',
  styleUrl: './content-4-names.component.css'
})
export class Content4NamesComponent {

  personForm = new FormGroup({
    firstName: new FormControl(''),
    name: new FormControl('')
  });

  constructor(private dataService: DataService) {}

  onFirstNameInputChange() {
    this.sendFirstNameDataToPreview()
  }

  onNameInputChange() {
    this.sendNameDataToPreview()
  }


  sendFirstNameDataToPreview() {
    let value = this.personForm.value.firstName
    if(value != null && value != undefined) {
      const dataToSend =  value
      this.dataService.updateIntenitionForData(dataToSend);
    }
  }

  sendNameDataToPreview() {
    let value = this.personForm.value.name
    if(value != null && value != undefined) {
      const dataToSend =  value
      this.dataService.updateIntenitionFromData(dataToSend);
    }
  }
}
