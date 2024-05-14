import { Injectable } from "@angular/core";
import { ParishRepository } from "../repositories/ParishRepository";
import { BehaviorSubject } from "rxjs";
import { Parish } from "../../model/parish";

@Injectable({
    providedIn: 'root'
  })
  export class ParishService {

    
    private previewParishDataSubject = new BehaviorSubject<Parish>(new Parish());
    previewData$ = this.previewParishDataSubject.asObservable();

    private parishRepository = new ParishRepository()
  

    loadData() {
      let data = this.parishRepository.getParish()
      this.previewParishDataSubject.next(data);
    }

    getData() {
      return this.previewParishDataSubject.getValue()
    }
  
  }