import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Intention } from '../../intention';
import { DataService } from '../../services/data-service';
import { IntentionPlace } from '../../../IntentionPlace';
import { Header } from '../../../Header';
import { ContentType } from '../../ContentType';

@Component({
  selector: 'app-intent-configurator',
  templateUrl: './intent-configurator.component.html',
  styleUrl: './intent-configurator.component.css',
  providers: [DataService]
})
export class IntentConfiguratorComponent {

  currentStep: number = 0;
  intention!: Intention
  placeData: string = "";
  type: string = "";
  data: string = "";
  header: Header = new Header(ContentType.THANKSGIVING, "");
  for: string = "";
  from: string = "";

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.previewData$.subscribe(data => {
      this.placeData = data;
    });

    this.dataService.previewDataType$.subscribe(data => {
      this.type = data;
    });

    this.dataService.previewDataDate$.subscribe(data => {
      this.data = data
    });

    this.dataService.previewDataHeader$.subscribe(data => {
      this.header = data;
    })

    this.dataService.previewDataFor$.subscribe(data => {
      this.for = data
    });

    this.dataService.previewDataFrom$.subscribe(data => {
      this.from = data;
    });
  }

  stages: string[] = [
    'intent-configurator/place-1',
    'intent-configurator/type-2',
    'intent-configurator/date-3',
    'intent-configurator/content-4'
  ];

  next(): void {
    if(this.currentStep < 3){
      this.currentStep++
      this.navigate()
    }
  }

  back(): void {
    if(this.currentStep > 0){
      this.currentStep--
      this.navigate()
    }
  }

  navigate(): void {
    this.router.navigate([this.stages[this.currentStep]])
  }
}
