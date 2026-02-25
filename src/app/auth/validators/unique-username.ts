import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})

export class UniqueUsername implements AsyncValidator {
    constructor(private auth: Auth) {}
    
    validate = (control: AbstractControl) => {
        const { value }= control;

        return this.auth.usernameAvailable(value).pipe(
            map((value) => {
                if (value.available) {
                    return null;
                }
                return { nonUniqueUsername: true };
            }), 
            catchError((err) => { 
                if (err.error.username) {
                    return of({ nonUniqueUsername: true });
                } else {
                    return of({ noConnection: true });
                }
            })
        );
    }    
}
