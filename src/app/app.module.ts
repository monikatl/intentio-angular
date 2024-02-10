import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app.component';
import { MassComponent } from './mass/mass.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { AddPriestComponent } from './add-priest/add-priest.component';
import { ConfigService } from './config/config.service';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PriestLoginComponent } from './priest-login/priest-login.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { IntentionsListComponent } from './intentions-list/intentions-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';



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
    IntentionsListComponent,
    TopMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    provideClientHydration(),
    importProvidersFrom(HttpClientModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
