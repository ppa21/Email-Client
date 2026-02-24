import { Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';

export const AUTH_ROUTES: Routes = [
  {
    path: '', component: Signin
  },
  {
    path: 'signup', component: Signup  
  }
];