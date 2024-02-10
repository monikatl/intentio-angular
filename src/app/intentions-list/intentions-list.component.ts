import { Component } from '@angular/core';
import { Intention } from '../intention';
import { IntentionServiceService } from '../intention-service.service';

@Component({
  selector: 'app-intentions-list',
  templateUrl: './intentions-list.component.html',
  styleUrl: './intentions-list.component.css'
})
export class IntentionsListComponent {


  constructor(private intentionService: IntentionServiceService) {}

  intentions: Intention[] = [];
  getIntentions(): void {
    this.intentionService.getIntentions()
    .subscribe((intentions: Intention[]) => this.intentions = intentions);
  }

}
