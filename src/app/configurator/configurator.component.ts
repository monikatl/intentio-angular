import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {Parish} from './parish'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPriestComponent } from '../add-priest/add-priest.component';
import { Priest } from '../priest';
import { ConfigService } from '../services/config.service';
import { emit } from 'node:process';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.css'
})
export class ConfiguratorComponent implements OnInit {

  

  parish!: Parish; 
  priests: Priest[] = [
    { name: 'Dr. Nice', email: '' },
  { name: 'Bombasto', email: '' },
  { name: 'Celeritas', email: '' }
  ];

  constructor(private dialog: MatDialog, private service: ConfigService){}

  ngOnInit(): void {
    
  }



  submitted = false;

  openFormDialog() {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.width = '350px';
        dialogConfig.height = '300px';

        // dialogConfig.data = {
        //   userData: userData // Przekazujemy dane użytkownika
        // };

        dialogConfig.position = {
          top: '5%',
          left: '5%'
      };

      const ref = this.dialog.open(AddPriestComponent, dialogConfig);

      ref.afterClosed().subscribe((result: Priest) => {
          this.addPriest(result)
      });
        
  }

  addPriest(priest: Priest) {
    this.parish.priests.push(priest);
  }

  editPriest() {
    let priest!: Priest;
    let index = this.parish.priests.indexOf(priest);
    this.parish.priests[index] = priest;
  }

  deletePriest() {
    let priest!: Priest;
    let index = this.parish.priests.indexOf(priest);
    this.parish.priests.splice(index, 1);
  }

  onSubmit() { 
    this.submitted = true; 
    //this.service.createParish(this.parish);
  }

  selectedPriest?: Priest;

  onSelect(priest: Priest): void {
    this.selectedPriest = priest;
  }
  
}
