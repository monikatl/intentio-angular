import { Injectable } from "@angular/core";
import { MassesRepository } from "../../MassesRepository";
import { BehaviorSubject } from "rxjs";
import { Mass } from "../mass";

@Injectable({
    providedIn: 'root'
  })
  export class MassesDataService {

    
    private previewMassesDataSubject = new BehaviorSubject<Mass[]>([]);
    previewData$ = this.previewMassesDataSubject.asObservable();

    private massesRepository: MassesRepository = new MassesRepository()
  

    loadData() {
      let data = this.massesRepository.getMasses()
      this.previewMassesDataSubject.next(data);
    }

    getData() {
      return this.previewMassesDataSubject.getValue()
    }
  
  }