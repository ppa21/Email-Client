import { Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Signout } from './signout/signout';
import { Signup } from './signup/signup';

export const AUTH_ROUTES: Routes = [
  {
    path: '', component: Signin, pathMatch: 'full'
  },
  {
    path: 'signup', component: Signup  
  },
  {
    path: 'signout', component: Signout
  }
];