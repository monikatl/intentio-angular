import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Intention } from '../../intention';
import { DataService } from '../../services/data-service';
import { Header } from '../../../Header';
import { ContentType } from '../../ContentType';
import { IntentionConfiguratorState, State } from '../configurator-state';
import { MatDialog } from '@angular/material/dialog';
import { EndDialogComponent } from '../../end-dialog/end-dialog.component';

@Component({
  selector: 'app-intent-configurator',
  templateUrl: './intent-configurator.component.html',
  styleUrl: './intent-configurator.component.css',
  providers: [DataService]
})
export class IntentConfiguratorComponent {

  intention: Intention = new Intention();
  //memorial!: Memorial;

  header: Header = new Header(ContentType.THANKSGIVING, "");
  nextButtonText: string = "DALEJ"

  configState: IntentionConfiguratorState = new IntentionConfiguratorState()
  state = State

  constructor(private router: Router, private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataService.previewData$.subscribe(data => {
      this.intention.place = data;
      this.sendDataToSummary();
    });

    this.dataService.previewDataType$.subscribe(data => {
      this.intention.type = data;
      this.sendDataToSummary();
    });

    this.dataService.previewDataDate$.subscribe(data => {
      this.intention.date = data
      this.sendDataToSummary();
    });

    this.dataService.previewDataHeader$.subscribe(data => {
      this.header = data;
      this.intention.header = data.content;
      this.sendDataToSummary();
    })

    this.dataService.previewDataFor$.subscribe(data => {
      this.intention.for = data
      this.sendDataToSummary();
    });

    this.dataService.previewDataFrom$.subscribe(data => {
      this.intention.from = data;
      this.sendDataToSummary();
    });

    this.dataService.previewDataAnniversary$.subscribe(data => {
      this.intention.anniversary = data;
      this.sendDataToSummary();
    });

    this.dataService.previewDataOccasion$.subscribe(data => {
      this.intention.occasion = data;
      this.sendDataToSummary();
    });

    this.dataService.state$.subscribe( data => {
      this.configState.current = data;
      this.sendDataToSummary();
    });
  }


  next(): void {
    //if()
    if(this.configState.current != State.SUMMARY) {
      this.configState.next();
      this.navigate();
    } else {
      this.openEndDialog()
    }
    
  }

  back(): void {
    this.configState.back();
    this.navigate();
  }

  navigate(): void {
    this.router.navigate([this.configState.current]);
  }

  setState(state: State) {
    this.configState.current = state;
    this.navigate();
  }

  sendDataToSummary() {
    const dataToSend =  this.intention;
    console.log(this.intention.place)
    this.dataService.updateIntention(dataToSend);
  }

  openEndDialog(): void {
    const dialogRef = this.dialog.open(EndDialogComponent, {
      width: '250px',
      data: { intention: this.intention }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog został zamknięty');
    });
  }

  escConfig() {
    this.router.navigate(['/main'])
  }
}
