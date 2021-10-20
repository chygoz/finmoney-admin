import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from './core/services/cookie.service';
//import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  token: any;
  constructor(public router: Router, private cookieService: CookieService) { }
  canActivate(): boolean {
    this.token = this.cookieService.getCookie('token');
    if (!this.token) {
      this.router.navigate(['/']);
      return false;
    }
    else {
      let userData = this.cookieService.getCookie('currentUser');
      if (userData) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }

    }

  }
}