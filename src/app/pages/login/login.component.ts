import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/repositories/user.repository';
import { Router } from '@angular/router';
import { CookieService } from 'src/services/cookie-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  userPassword: string;

  constructor(
    private userRepository: UserRepository,
    private router: Router,
    private cookieService: CookieService
  ) {
    if (cookieService.cookieExists('user')) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

  login(): void {
    this.userRepository.getUsers().subscribe({
      next: (value) => {
        for (const i of value) {
          if (i.id == this.userId && i.password == this.userPassword) {
            this.cookieService.createCookie(i);
            this.router.navigate(['/home']);
          } 
        }
      }
    });
  }
}
