import { HttpClient } from "@angular/common/http";
import { IPhoto } from "./IPhoto";
import { Observable } from "rxjs";
import { Injectable, OnInit } from "@angular/core";

const API = "http://localhost:3000/";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(API + userName + "/photos");
  }
}
