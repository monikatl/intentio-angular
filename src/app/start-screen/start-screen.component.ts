import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css'
})
export class StartScreenComponent {

  title = 'Intentio - Parafia Świętego Franciszka z Asyżu';
  constructor(private router: Router) {}
  
  handleButtonClick(buttonNumber: number): void {
    if (buttonNumber === 1) {
      this.router.navigate(['/user-login']); 
    } else if (buttonNumber === 2) {
      this.router.navigate(['/priest-login']);
    }
  }

}
