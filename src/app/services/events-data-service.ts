import { Injectable } from "@angular/core";
import { MassesRepository } from "../repositories/MassesRepository";
import { BehaviorSubject } from "rxjs";
import { IEvent } from "../../IEvents";
import { IEventsRepository } from "../../IEventsRepository";

@Injectable({
    providedIn: 'root'
  })
  export class EventsDataService {

    private previewEventsDataSubject = new BehaviorSubject<IEvent[]>([]);
    previewData$ = this.previewEventsDataSubject.asObservable();

    private repository!: IEventsRepository;
  

    loadData(repository: IEventsRepository) {
      this.setRepository(repository)
      let data = this.repository.getData();
      this.previewEventsDataSubject.next(data);
      return this.getData()
    }

    setRepository(repository: IEventsRepository) {
      this.repository = repository
    }

    getData() {
      return this.previewEventsDataSubject.getValue()
    }
  
  }