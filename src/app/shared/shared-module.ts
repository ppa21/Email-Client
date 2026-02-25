import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent
  ]
})
export class SharedModule { }
