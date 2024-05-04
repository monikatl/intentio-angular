import { Component } from '@angular/core';
import { IntentionServiceService } from '../services/intention-service.service';
import { Intention } from '../intention';

@Component({
  selector: 'app-arriving-intentions',
  templateUrl: './arriving-intentions.component.html',
  styleUrl: './arriving-intentions.component.css'
})
export class ArrivingIntentionsComponent {

  intentions: Intention[] = []

  constructor(private intentionsService: IntentionServiceService){}

  ngOnInit(): void {
    this.intentionsService.loadData()
    this.intentions = this.intentionsService.getData()
  }

}
