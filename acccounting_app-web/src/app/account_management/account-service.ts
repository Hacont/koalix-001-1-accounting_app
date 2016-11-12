import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Rating } from '../model/rating.model';
import { Observable } from 'rxjs';

import { Account } from './account';

@Injectable()
export class AccountService {
    private backendUrl = 'http://localhost:8080/restApp/rest/';

    constructor(private http: Http) {}


    getAccounts(): Observable<Account[]> {
        return this.http.get(this.backendUrl + 'accounts')
            .map(res => res.json());
    }

    addAccount(newAccount: Account): Observable<Account[]> {
        let body = JSON.stringify(newAccount); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.backendUrl + 'accounts', body, options) // ...using post request
            .map(res => res.json()); // ...and calling .json() on the response to return data
    }
}
