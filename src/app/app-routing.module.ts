import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { PriestLoginComponent } from './priest-login/priest-login.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { MainComponent } from './main/main.component';
import { ConfiguratorComponent } from './parish-config/configurator/configurator.component';
import { IntentConfiguratorComponent } from './intent-config/intent-configurator/intent-configurator.component';
import { Place1Component } from './intent-config/place-1/place-1.component';
import { Type2Component } from './intent-config/type-2/type-2.component';
import { Date3Component } from './intent-config/date-3/date-3.component';
import { Content4Component } from './intent-config/content-4/content-4.component';
import { Summary5Component } from './intent-config/summary-5/summary-5.component';
import { Pay6Component } from './intent-config/pay-6/pay-6.component';
import { Content4NamesComponent } from './intent-config/content-4-names/content-4-names.component';



const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'priest-login', component: PriestLoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'configurator', component: ConfiguratorComponent },
  { path: 'intent-configurator', component: IntentConfiguratorComponent, children: [
    { path: 'place-1', component: Place1Component},
    { path: 'type-2', component: Type2Component},
    { path: 'date-3', component: Date3Component},
    { path: 'content-4', component: Content4Component},
    { path: 'content-4-names', component: Content4NamesComponent},
    { path: 'summary-5', component: Summary5Component},
    { path: 'pay-6', component: Pay6Component}
  ]},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }// <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
