import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from './../../config';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }


    getMenu({ }): Observable<any> {
        return this.http.post(config.api_url + 'admin/getMenu', {}).pipe(map(menu => {
            // login successful if there's a jwt token in the response
            return menu;
        }));
    }
}