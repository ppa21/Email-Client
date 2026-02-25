import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, Signin, Signup, ReactiveFormsModule, SharedModule
  ]
})
export class AuthModule { }
