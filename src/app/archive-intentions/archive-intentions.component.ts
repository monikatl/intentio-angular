import { Component } from '@angular/core';
import { Intention } from '../intention';
import { IntentionServiceService } from '../services/intention-service.service';

@Component({
  selector: 'app-archive-intentions',
  templateUrl: './archive-intentions.component.html',
  styleUrl: './archive-intentions.component.css'
})
export class ArchiveIntentionsComponent {

  intentions: Intention[] = []

  constructor(private intentionsService: IntentionServiceService){}

  ngOnInit(): void {
    this.intentionsService.loadData()
    this.intentions = this.intentionsService.getData()
  }
}
