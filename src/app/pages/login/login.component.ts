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
    private cookieService: CookieService,
    private router: Router
  ) {
    if (cookieService.cookieExists('user')) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

  login(): void {
    this.userRepository.login(this.userId, this.userPassword);
  }
}
