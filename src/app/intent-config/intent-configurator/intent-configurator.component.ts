import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Intention } from '../../intention';
import { DataService } from '../../services/data-service';
import { Header } from '../../../Header';
import { ContentType } from '../../ContentType';
import { IntentionConfiguratorState, State } from '../configurator-state';

@Component({
  selector: 'app-intent-configurator',
  templateUrl: './intent-configurator.component.html',
  styleUrl: './intent-configurator.component.css',
  providers: [DataService]
})
export class IntentConfiguratorComponent {

  intention!: Intention
  placeData: string = "";
  type: string = "";
  data: string = "";
  header: Header = new Header(ContentType.THANKSGIVING, "");
  for: string = "";
  from: string = "";

  configState: IntentionConfiguratorState = new IntentionConfiguratorState()
  state = State


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


  next(): void {
    this.configState.next()
    this.navigate()
  }

  back(): void {
    this.configState.back()
    this.navigate()
  }

  navigate(): void {
    this.router.navigate([this.configState.current])
  }

  setState(state: State) {
    this.configState.current = state
    this.navigate()
  }
}
