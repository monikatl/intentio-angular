import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IntentionPlace } from '../../IntentionPlace';
import { IntentionType } from '../IntentionType';
import { Header } from '../../Header';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private previewDataSubject = new Subject<IntentionPlace>();
  previewData$ = this.previewDataSubject.asObservable();

  updateIntenitionPlaceData(data: IntentionPlace) {
    this.previewDataSubject.next(data);
  }

  private previewDataSubjectType = new Subject<IntentionType>();
  previewDataType$ = this.previewDataSubjectType.asObservable();

  updateIntenitionTypeData(dataToSend: IntentionType) {
    this.previewDataSubjectType.next(dataToSend)
  }

  private previewDataSubjectDate = new Subject<string>();
  previewDataDate$ = this.previewDataSubjectDate.asObservable();

  updateIntenitionDateData(dataToSend: string) {
    this.previewDataSubjectDate.next(dataToSend)
  }

  private previewDataSubjectHeader = new Subject<Header>();
  previewDataHeader$ = this.previewDataSubjectHeader.asObservable();

  updateIntenitionHeaderData(dataToSend: Header) {
    this.previewDataSubjectHeader.next(dataToSend)
  }

  private previewDataSubjectFor = new Subject<string>();
  previewDataFor$ = this.previewDataSubjectFor.asObservable();

  updateIntenitionForData(dataToSend: string) {
    this.previewDataSubjectFor.next(dataToSend)
  }

  private previewDataSubjectFrom = new Subject<string>();
  previewDataFrom$ = this.previewDataSubjectFrom.asObservable();

  updateIntenitionFromData(dataToSend: string) {
    this.previewDataSubjectFrom.next(dataToSend)
  }
}