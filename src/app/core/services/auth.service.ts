import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from './../../config';
import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User = new User;

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser') || '{}');
        }
        return this.user;
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
    *
    login(email: string, password: string) {
        return this.http.post<any>(`/api/login`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    this.user = user;
                    // store user details and jwt in cookie
                    this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                }
                return user;
            }));
    }
    */

    login(email: string, password: string): Observable<any> {
        let params = {
            email: email,
            password: password

        }

        return this.http.post(config.api_url + 'admin/login', params).pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user) {

                // this.user = user;
                // store user details and jwt in cookie
                this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);



            }
            return user;
        }));
    }
    forgotpassword(params: any): Observable<any> {
        return this.http.post(config.api_url + 'admin/resetpasswordlink', params);
    }

    resetPassword(params:any): Observable<any> {
        return this.http.post(config.api_url + 'admin/resetPassword', params);
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
        this.cookieService.deleteCookie('token');
        this.cookieService.deleteCookie('currentUser');
        
    }

}

