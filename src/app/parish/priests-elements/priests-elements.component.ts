import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Priest } from '../../priest';
import { ActivatedRoute } from '@angular/router';
import { PriestService } from '../../services/priest-service';

@Component({
  selector: 'app-priests-elements',
  templateUrl: './priests-elements.component.html',
  styleUrl: './priests-elements.component.css'
})
export class PriestsElementsComponent implements OnInit {
  priests$?: Observable<Priest[]>;
  selectedId = 0;

  constructor(
    private service: PriestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.priests$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.loadData();
      })
    );
  }
}