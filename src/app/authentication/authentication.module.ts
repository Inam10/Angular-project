import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './Registration/sign-up/sign-up.component';
import { LogInComponent } from './Login/log-in/log-in.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SignUpComponent,
    LogInComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogInComponent,
    SignUpComponent
  ]
})
export class AuthenticationModule { }
