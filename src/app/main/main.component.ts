import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MassesRepository } from '../repositories/MassesRepository';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router: Router) {}

  navigateToIntentConfigurator() {
    this.router.navigate(['intent-configurator/place-1'])
  }

}
