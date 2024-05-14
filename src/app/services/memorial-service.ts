import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Memorial } from "../../memorial";
import { MemorialRepository } from "../repositories/MemorialRepository";

@Injectable({
    providedIn: 'root'
  })
  export class MemorialService {

    
    private previewMemorialsDataSubject = new BehaviorSubject<Memorial[]>([]);
    previewData$ = this.previewMemorialsDataSubject.asObservable();

    private memorialRepository: MemorialRepository = new MemorialRepository()
  

    loadData() {
      let data = this.memorialRepository.getMemorials()
      this.previewMemorialsDataSubject.next(data);
    }

    getData() {
      return this.previewMemorialsDataSubject.getValue()
    }
  
  }