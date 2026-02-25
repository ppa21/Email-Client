import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-signout',
  imports: [],
  standalone: true,
  templateUrl: './signout.html',
  styleUrl: './signout.css',
})
export class Signout {
  constructor(
    private auth: Auth,
    private router: Router
  ) {
    console.log('signout constructor');
  }

  ngOnInit() {
    
    this.auth.signout().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
