import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Intention } from '../intention';
import { IntentionsRepository } from '../repositories/IntentionsRepository';

@Injectable({
  providedIn: 'root'
})
export class IntentionServiceService {

  private previewIntentionsDataSubject = new BehaviorSubject<Intention[]>([]);
  previewData$ = this.previewIntentionsDataSubject.asObservable();

    private intentionsRepository: IntentionsRepository = new IntentionsRepository()
  

    loadData() {
      let data = this.intentionsRepository.getIntentions()
      this.previewIntentionsDataSubject.next(data);
    }

    getData() {
      return this.previewIntentionsDataSubject.getValue()
    }

    addData(intetion: Intention) {
      this.intentionsRepository.addIntention(intetion)
      this.loadData()
    }
}
