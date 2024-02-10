import { Component, Inject, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Priest } from '../priest';


@Component({
  selector: 'app-add-priest',
  templateUrl: './add-priest.component.html',
  styleUrl: './add-priest.component.css'
})
export class AddPriestComponent implements OnInit{

  description = "Dodaj Kapłana";

  form!: FormGroup;

  selectedOption: string = '';

  priest!: Priest;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPriestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

  }

  @Output() formSubmit: EventEmitter<Priest> = new EventEmitter<Priest>();

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
      this.formSubmit.emit(this.priest);
      this.dialogRef.close();
      
   // }
  }

  createPriest() {
    
  }


  cancel() {
    this.dialogRef.close();
  }

}
