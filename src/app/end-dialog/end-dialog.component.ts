import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { State } from '../intent-config/configurator-state';
import { DataService } from '../services/data-service';
import { IntentionServiceService } from '../services/intention-service.service';
import { Intention } from '../intention';

@Component({
  selector: 'app-end-dialog',
  templateUrl: './end-dialog.component.html',
  styleUrl: './end-dialog.component.css'
})
export class EndDialogComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Intention, 
    public dialogRef: MatDialogRef<EndDialogComponent>,
    private router: Router,
    private dataService: DataService,
    private intentionService: IntentionServiceService) {}

  
    orderIntention() {
      this.intentionService.addData(this.data)
      console.log(this.data.header)
      this.goToPay6()
    }

    goToPay6() {
      this.router.navigate([State.PAY])
      this.dialogDismiss()
    }

    dialogDismiss() {
      this.dialogRef.close()
    }

}
