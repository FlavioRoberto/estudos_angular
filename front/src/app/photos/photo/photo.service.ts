import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

import { IPhoto } from './IPhoto';

const API = 'http://localhost:3002/';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    constructor(private http: HttpClient) { }

    listFromUser(userName: string): Observable<IPhoto[]> {
        return this.http.get<IPhoto[]>(API + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number): Observable<IPhoto[]> {
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<IPhoto[]>(API + userName + '/photos', { params });
    }
}
