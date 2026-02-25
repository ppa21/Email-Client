import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from "../../shared/input/input";
import { Auth } from '../auth';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  authForm: FormGroup;

  constructor(
      private matchPassword: MatchPassword, 
      private uniqueUsername: UniqueUsername, 
      private auth: Auth, 
      private router: Router) {
    this.authForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ], [this.uniqueUsername.validate]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    }, { validators: [this.matchPassword.validate] });
  }

  onSubmit() {
    if (this.authForm.pending || !this.authForm.valid) {
      return;
    }

    this.auth.signup(this.authForm.value).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/inbox');
      },
      error: (err) => {
        if (!err.status) {
          this.authForm.setErrors({ noConnection: true })
        } else if (err.status === 422) { 
          this.authForm.get('username')?.setErrors({ nonUniqueUsername: true })
        }
        else {
            this.authForm.setErrors({ unknownError: true })
        }
      }
    });
  }
}
