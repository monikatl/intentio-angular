import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { PriestLoginComponent } from './priest-login/priest-login.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'priest-login', component: PriestLoginComponent },
  { path: 'main', component: MainComponent },
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
