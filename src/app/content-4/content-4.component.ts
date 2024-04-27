import { Component, OnInit } from '@angular/core';
import { Header } from '../../Header';
import { HeadersRepository } from '../../HeadersRepository';
import { ContentType } from '../ContentType';
import { DataService } from '../../data-service';

import { FormControl, FormGroup } from '@angular/forms';
import { Occasion } from '../../Occasions';
import { OccasionRepository } from '../add-priest/OccasionRepository';

@Component({
  selector: 'app-content-4',
  templateUrl: './content-4.component.html',
  styleUrl: './content-4.component.css'
})
export class Content4Component {

  headers: Header[] = []
  occasions: Occasion[] = []
  contentType = ContentType
  currentHeader!: Header


  personForm = new FormGroup({
    for: new FormControl(''),
    from: new FormControl('')
  });

  constructor(private dataService: DataService) {}


  getHeaders(type: ContentType) {
    this.headers = new HeadersRepository().headers.filter((header) => header.type == type)
  }

  getOccasions() {
    this.occasions = new OccasionRepository().occasions
  }

  setIntentionHeader(header: Header) {
    this.currentHeader = header;
    this.sendDataToPreview()
  }

  sendDataToPreview() {
    const dataToSend =  this.currentHeader
    this.dataService.updateIntenitionHeaderData(dataToSend);
  }

  onOccasionSelectClick() {
    this.getOccasions()
  }

  onForInputChange() {
    this.sendForDataToPreview()
  }

  onFromInputChange() {
    this.sendFromDataToPreview()
  }


  sendForDataToPreview() {
    let value = this.personForm.value.for 
    if(value != null && value != undefined) {
      const dataToSend =  value
      this.dataService.updateIntenitionForData(dataToSend);
    }
  
  }

  sendFromDataToPreview() {
    let value = this.personForm.value.from 
    if(value != null && value != undefined) {
      const dataToSend =  value
      this.dataService.updateIntenitionFromData(dataToSend);
    }
  }

}
