import { Component, Input, OnInit } from '@angular/core';
import { State } from '../configurator-state';
import { DataService } from '../../services/data-service';
import { Router } from '@angular/router';
import { Intention } from '../../intention';

@Component({
  selector: 'app-summary-5',
  templateUrl: './summary-5.component.html',
  styleUrl: './summary-5.component.css'
})
export class Summary5Component implements OnInit{

  state = State
  intent: Intention = new Intention();

  constructor(private router: Router, private dataService: DataService) {}


  ngOnInit(): void {
    this.intent = this.dataService.getIntention()
  }

  change(state: State) {
    this.sendDataToConfig(state)
    this.router.navigate([state])
  }

  sendDataToConfig(state: State) {
    const dataToSend =  state
    this.dataService.updateState(dataToSend);
  }
  
}
