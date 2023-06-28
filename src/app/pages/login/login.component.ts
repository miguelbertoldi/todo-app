import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/classes/users/user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  userName: string;
  users: User[];

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {

  }

  login(): void {
    this.authService.login(this.userId, this.userName);
  }

}
