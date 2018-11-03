import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';
import { IUser } from './user.interface';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new Subject<IUser>();

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    //as observable permite o subscribe
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    try {
      const user = jwt_decode.decode(token) as IUser;
      this.userSubject.next(user);
    } catch (e) {
      console.log((<Error>e).message);
    }
  }
}
