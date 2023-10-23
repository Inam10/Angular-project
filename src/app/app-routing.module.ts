import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './authentication/Login/log-in/log-in.component';
import { SignUpComponent } from './authentication/Registration/sign-up/sign-up.component';
import { HomeComponent } from './menu/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component : LogInComponent
  },
  {
    path: 'singnup',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
