import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/classes/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  userPassword: string;
  logged: User;

  constructor(
    private userRepository: UserRepository,
    private router: Router
  ) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }

  ngOnInit() {

  }

  login(): void {
    this.userRepository.getUsers().subscribe({
      next: (value) => {
        for (const i of value) {
          if (i.id == this.userId && i.password == this.userPassword) {
            this.logged = i;
            localStorage.setItem('user', JSON.stringify(i));
            this.router.navigate(['/home']);
          } 
        }
      }
    })
  }
}
