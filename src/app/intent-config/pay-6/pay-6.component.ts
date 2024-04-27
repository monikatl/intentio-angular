import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-pay-6',
  templateUrl: './pay-6.component.html',
  styleUrl: './pay-6.component.css'
})
export class Pay6Component {

  constructor(private router: Router, private dataService: DataService) {}
  
  escConfig() {
    this.router.navigate(['/main'])
  }

}
