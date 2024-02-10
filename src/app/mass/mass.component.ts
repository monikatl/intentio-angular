import { Component } from '@angular/core';
import { Mass } from './mass';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrl: './mass.component.css'
})
export class MassComponent {
    mass: Mass = {
      id: 1,
      date: '07.02.2024 7:00',
      name: 'Dziękczyna. W rocznicę urodzin Karoliny'
    }
}
