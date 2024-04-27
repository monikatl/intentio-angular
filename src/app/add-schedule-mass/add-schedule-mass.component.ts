import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScheduleMass } from '../schedule-mass';

@Component({
  selector: 'app-add-schedule-mass',
  templateUrl: './add-schedule-mass.component.html',
  styleUrl: './add-schedule-mass.component.css'
})
export class AddScheduleMassComponent {

  description = "Dodaj Mszę Świętą";

  form!: FormGroup;

  selectedOption: string = '';

  mass!: ScheduleMass;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddScheduleMassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

  }

  @Output() formSubmit: EventEmitter<ScheduleMass> = new EventEmitter<ScheduleMass>();

  ngOnInit(): void {
    this.form = this.fb.group({
      //  description: ["wow"],
      //  category: ["yu",  Validators.required]
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    //if (this.form.valid) {
      this.formSubmit.emit(this.mass);
      this.dialogRef.close();
      
   // }
  }

  createPriest() {
    
  }


  cancel() {
    this.dialogRef.close();
  }

}
