import { UserService } from './core/authentication/user.service';
import { Router } from '@angular/router';
import { AuthService } from './core/authentication/auth.service';
import { Component } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  user$ = this.auth.user$;
  constructor(
    private userService: UserService,
    public auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) return;
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
