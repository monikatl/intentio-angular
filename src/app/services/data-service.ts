import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IntentionPlace } from '../../IntentionPlace';
import { IntentionType } from '../IntentionType';
import { Header } from '../../Header';
import { State } from '../intent-config/configurator-state';
import { Intention } from '../intention';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private previewDataSubject = new BehaviorSubject<IntentionPlace>(IntentionPlace.MASS);
  previewData$ = this.previewDataSubject.asObservable();

  updateIntenitionPlaceData(data: IntentionPlace) {
    this.previewDataSubject.next(data);
  }

  getIntentionPlace() {
    return this.previewDataSubject.getValue()
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

  private previewDataSubjectAnniversary= new Subject<number>();
  previewDataAnniversary$ = this.previewDataSubjectAnniversary.asObservable();

  updateIntentionAnniversaryData(dataToSend: number) {
    this.previewDataSubjectAnniversary.next(dataToSend);
  }

  private previewDataSubjectOccasion= new Subject<string>();
  previewDataOccasion$ = this.previewDataSubjectOccasion.asObservable();

  updateIntentionOccasionData(dataToSend: string) {
    this.previewDataSubjectOccasion.next(dataToSend);
  }

  private subjectState= new Subject<State>();
  state$ = this.subjectState.asObservable();

  updateState(dataToSend: State) {
    this.subjectState.next(dataToSend);
  }

  private subjectIntention= new BehaviorSubject<Intention>(new Intention());
  intention$ = this.subjectIntention.asObservable();

  updateIntention(dataToSend: Intention) {
    this.subjectIntention.next(dataToSend);
  }

  getIntention(): Intention {
    return this.subjectIntention.getValue();
  }

}