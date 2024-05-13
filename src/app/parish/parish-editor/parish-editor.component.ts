import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parish-editor',
  templateUrl: './parish-editor.component.html',
  styleUrl: './parish-editor.component.css'
})
export class ParishEditorComponent {

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path])
  }

}
