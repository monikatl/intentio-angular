import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { State } from '../intent-config/configurator-state';

@Component({
  selector: 'app-end-dialog',
  templateUrl: './end-dialog.component.html',
  styleUrl: './end-dialog.component.css'
})
export class EndDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public dialogRef: MatDialogRef<EndDialogComponent>,
    private router: Router) {}

    goToPay6() {
      this.router.navigate([State.PAY])
      this.dialogDismiss()
    }

    dialogDismiss() {
      this.dialogRef.close()
    }

}
