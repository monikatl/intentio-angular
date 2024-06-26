import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MassComponent } from './mass/mass.component';
import { ConfiguratorComponent } from './parish-config/configurator/configurator.component';
import { AddPriestComponent } from './parish-config/add-priest/add-priest.component';
import { ConfigService } from './services/config.service';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PriestLoginComponent } from './priest-login/priest-login.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AddScheduleMassComponent } from './parish-config/add-schedule-mass/add-schedule-mass.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatNativeDateModule } from '@angular/material/core';
import { AddPlaceComponent } from './parish-config/add-place/add-place.component';
import { IntentConfiguratorComponent } from './intent-config/intent-configurator/intent-configurator.component';
import { Place1Component } from './intent-config/place-1/place-1.component';
import { Type2Component } from './intent-config/type-2/type-2.component';
import { Date3Component } from './intent-config/date-3/date-3.component';
import { Content4Component } from './intent-config/content-4/content-4.component';
import { PreviewComponent } from './preview/preview.component';
import { DataService } from './services/data-service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Summary5Component } from './intent-config/summary-5/summary-5.component';
import { Pay6Component } from './intent-config/pay-6/pay-6.component';
import { EndDialogComponent } from './end-dialog/end-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ArrivingIntentionsComponent } from './arriving-intentions/arriving-intentions.component';
import { ArchiveIntentionsComponent } from './archive-intentions/archive-intentions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LateComponent } from './late/late.component';
import { Content4NamesComponent } from './intent-config/content-4-names/content-4-names.component';
import { ParishEditorComponent } from './parish/parish-editor/parish-editor.component';
import { ParishElementsComponent } from './parish/parish-elements/parish-elements.component';
import { PriestsElementsComponent } from './parish/priests-elements/priests-elements.component';
import { MassesElementsComponent } from './parish/masses-elements/masses-elements.component';
import { ServicesElementsComponent } from './parish/services-elements/services-elements.component';
import { SacramentElementsComponent } from './parish/sacrament-elements/sacrament-elements.component';
import { PlacesElementsComponent } from './parish/places-elements/places-elements.component';
import { MemorialsElementsComponent } from './parish/memorials-elements/memorials-elements.component';
import { PatronDetailsComponent } from './parish/patron-details/patron-details.component';
import { AddressDetailsComponent } from './parish/address-details/address-details.component';
import { AccountDetailsComponent } from './parish/account-details/account-details.component';
import { ContactDetailsComponent } from './parish/contact-details/contact-details.component';
import { OfficeDetailsComponent } from './parish/office-details/office-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MassComponent,
    ConfiguratorComponent,
    AddPriestComponent,
    StartScreenComponent,
    UserLoginComponent,
    PriestLoginComponent,
    MainComponent,
    TopMenuComponent,
    FooterComponent,
    AddScheduleMassComponent,
    AddPlaceComponent,
    IntentConfiguratorComponent,
    Place1Component,
    Type2Component,
    Date3Component,
    Content4Component,
    PreviewComponent,
    Summary5Component,
    Pay6Component,
    EndDialogComponent,
    HeaderComponent,
    ArrivingIntentionsComponent,
    ArchiveIntentionsComponent,
    CalendarComponent,
    LateComponent,
    Content4NamesComponent,
    ParishEditorComponent,
    ParishElementsComponent,
    PriestsElementsComponent,
    MassesElementsComponent,
    ServicesElementsComponent,
    SacramentElementsComponent,
    PlacesElementsComponent,
    MemorialsElementsComponent,
    PatronDetailsComponent,
    AddressDetailsComponent,
    AccountDetailsComponent,
    ContactDetailsComponent,
    OfficeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  providers: [
    ConfigService,
    DataService,
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
