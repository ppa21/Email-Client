import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/input/input';
import { Auth } from '../auth';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  authForm: FormGroup;
  constructor(private auth: Auth, private router: Router) {
    this.authForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ])
    });
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.auth.signin(this.authForm.value).subscribe(() => {
      this.router.navigateByUrl('/inbox');
    });
  }
}
