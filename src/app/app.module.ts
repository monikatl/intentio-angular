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
import { ConfiguratorComponent } from './configurator/configurator.component';
import { AddPriestComponent } from './add-priest/add-priest.component';
import { ConfigService } from './services/config.service';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PriestLoginComponent } from './priest-login/priest-login.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AddScheduleMassComponent } from './add-schedule-mass/add-schedule-mass.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatNativeDateModule } from '@angular/material/core';
import { AddPlaceComponent } from './add-place/add-place.component';
import { IntentConfiguratorComponent } from './intent-configurator/intent-configurator.component';
import { Place1Component } from './place-1/place-1.component';
import { Type2Component } from './type-2/type-2.component';
import { Date3Component } from './date-3/date-3.component';
import { Content4Component } from './content-4/content-4.component';
import { PreviewComponent } from './preview/preview.component';
import { DataService } from '../data-service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


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
    PreviewComponent
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
    MatSlideToggleModule
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
