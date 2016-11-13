import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Rating } from '../model/rating.model';
import { Observable } from 'rxjs';
import { AccountingEntry } from './accounting-entry';

@Injectable()
export class AccountingEntryService {
    private backendUrl = 'http://localhost:8080/restApp/rest/';

    constructor(private http: Http) {}


    getAccountingEntries(): Observable<AccountingEntry[]> {
        return this.http.get(this.backendUrl + 'accountingEntries')
            .map(res => res.json());
    }

    addAccountingEntry(newAccountingEntry: AccountingEntry): Observable<AccountingEntry[]> {
        let body = JSON.stringify(newAccountingEntry); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.backendUrl + 'accountsEntries', body, options) // ...using post request
            .map(res => res.json()); // ...and calling .json() on the response to return data
    }
}
