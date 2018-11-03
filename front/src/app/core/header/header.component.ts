import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user/user.interface';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private user$: Observable<IUser>;
  private user: IUser;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => {
      this.user = user;
      console.log('entrou');
    });
  }

  ngOnInit() {}
}
