import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { IUser } from './user.interface';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<IUser>(null);
  private userName: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      console.log('entrou');
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

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    try {
      const user = this.jwtHelper.decodeToken(token) as IUser;
      this.userName = user.name;
      this.userSubject.next(user);
    } catch (e) {
      console.log((<Error>e).message);
    }
  }
}
