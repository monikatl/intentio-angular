import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Priest } from "../priest";
import { PriestRepository } from "../repositories/PriestsRepository";

@Injectable({
    providedIn: 'root'
})
export class PriestService {

    private previewPriestsDataSubject = new BehaviorSubject<Priest[]>([]);
    previewData$ = this.previewPriestsDataSubject.asObservable();

    private repository = new PriestRepository();
  

    loadData() {
      let data = this.repository.getData();
      this.previewPriestsDataSubject.next(data);
      return this.previewData$
    }


    getData() {
      return this.previewData$
    }
  
}