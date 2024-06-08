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
import { PreviewComponent } from './preview/preview.component';
import { DataService } from './services/data-service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ArrivingIntentionsComponent } from './arriving-intentions/arriving-intentions.component';
import { ArchiveIntentionsComponent } from './archive-intentions/archive-intentions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LateComponent } from './late/late.component';



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
    PreviewComponent,
    HeaderComponent,
    ArrivingIntentionsComponent,
    ArchiveIntentionsComponent,
    CalendarComponent,
    LateComponent
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
