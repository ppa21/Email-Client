import { Component, Input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputComponent {
  @Input() label = '';
  @Input() control!: AbstractControl;
  @Input() inputType = '';

  showErrors(): boolean {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && !!errors;
  }
}
