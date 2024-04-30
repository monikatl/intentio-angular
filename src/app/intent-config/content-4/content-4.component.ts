import { Component, OnInit } from '@angular/core';
import { Header } from '../../../Header';
import { HeadersRepository } from '../../../HeadersRepository';
import { ContentType } from '../../ContentType';
import { DataService } from '../../services/data-service';

import { FormControl, FormGroup } from '@angular/forms';
import { Occasion } from '../../../Occasions';
import { OccasionRepository } from '../../parish-config/add-priest/OccasionRepository';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-content-4',
  templateUrl: './content-4.component.html',
  styleUrl: './content-4.component.css'
})
export class Content4Component implements OnInit {

  headers: Header[] = []
  occasions: Occasion[] = []
  numbers: number[] = []
  contentType = ContentType
  currentHeader!: Header
  selectedOccasion!: string; 
  selectedNumberedOccasion!: string; 
  selectedNumber!: number;

  isDisabledAnniversary: boolean = true;
  isDisabledOccasion: boolean = true;
  isDisabledNumberedOccasion: boolean = true;

  occasionToggle: boolean = false;
  anniversaryToggle: boolean = false;


  personForm = new FormGroup({
    for: new FormControl(''),
    from: new FormControl('')
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getOccasions()
    this.generateNumbers()
  }

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

  sendAnniverasyDataToPreview() {
    const dataToSend = this.selectedNumber
    this.dataService.updateIntentionAnniversaryData(dataToSend)
  }

  sendOccasionDataToPreview(occasion: string) {
    const dataToSend =  occasion
    this.dataService.updateIntentionOccasionData(dataToSend)
  }



  generateNumbers() {
   this.numbers = Array.from({length: 100}, (_, index) => index + 1);
  }

  checkOccasionToggle() {
    if(this.occasionToggle) {
      if(this.anniversaryToggle) {
        this.anniversaryToggle = false;
      }
      this.isDisabledOccasion = !this.isDisabledOccasion;
    }
  }

  checkAnniversaryToggle() {
    if(this.anniversaryToggle) {
      if(this.occasionToggle) {
        this.occasionToggle = false;
      }
      this.isDisabledAnniversary = !this.isDisabledAnniversary;
      this.isDisabledNumberedOccasion = !this.isDisabledNumberedOccasion;
    }
  }

  onSelectionAnniversaryNumberedChange() {
    this.sendOccasionDataToPreview(this.selectedNumberedOccasion)
  }

  onSelectionAnniversaryChange() {
    this.sendAnniverasyDataToPreview()
  }

  onSelectionOccasionChange() {
    this.sendOccasionDataToPreview(this.selectedOccasion)
  }

}
