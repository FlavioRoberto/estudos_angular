import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }
}
