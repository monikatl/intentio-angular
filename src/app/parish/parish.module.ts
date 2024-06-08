import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ParishRoutingModule } from './parish-routing.module';
import { ParishEditorComponent } from './parish-editor/parish-editor.component';
import { ParishElementsComponent } from './parish-elements/parish-elements.component';
import { PatronDetailsComponent } from './patron-details/patron-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PriestsElementsComponent } from './priests-elements/priests-elements.component';
import { MassesElementsComponent } from './masses-elements/masses-elements.component';
import { MemorialsElementsComponent } from './memorials-elements/memorials-elements.component';
import { OfficeDetailsComponent } from './office-details/office-details.component';
import { ServicesElementsComponent } from './services-elements/services-elements.component';
import { PlacesElementsComponent } from './places-elements/places-elements.component';
import { SacramentElementsComponent } from './sacrament-elements/sacrament-elements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParishRoutingModule
  ],
  declarations: [
    ParishEditorComponent,
    ParishElementsComponent,
    PatronDetailsComponent,
    AccountDetailsComponent,
    AddressDetailsComponent,
    ContactDetailsComponent,
    OfficeDetailsComponent,
    PriestsElementsComponent,
    MassesElementsComponent,
    MemorialsElementsComponent,
    ServicesElementsComponent,
    PlacesElementsComponent,
    SacramentElementsComponent
  ]
})
export class ParishModule {}