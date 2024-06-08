import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IntentConfigRoutingModule } from './intent-config-routing.module';

import { IntentConfiguratorComponent } from './intent-configurator/intent-configurator.component';
import { Place1Component } from './place-1/place-1.component';
import { Type2Component } from './type-2/type-2.component';
import { Date3Component } from './date-3/date-3.component';
import { Content4Component } from './content-4/content-4.component';
import { Content4NamesComponent } from './content-4-names/content-4-names.component';
import { Summary5Component } from './summary-5/summary-5.component';
import { Pay6Component } from './pay-6/pay-6.component';
import { EndDialogComponent } from './end-dialog/end-dialog.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IntentConfigRoutingModule
  ],
  declarations: [
    IntentConfiguratorComponent,
    Place1Component,
    Type2Component,
    Date3Component,
    Content4Component,
    Content4NamesComponent,
    Summary5Component,
    Pay6Component,
    EndDialogComponent
  ]
})
export class ParishModule {}