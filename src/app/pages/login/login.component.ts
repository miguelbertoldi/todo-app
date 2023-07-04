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
    userRepository.getUsers().subscribe({
      next: (value) => {
        console.log(value);
      }
    })

    if (cookieService.cookieExists('user')) {
      localStorage.setItem('logged', 'true');
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
            localStorage.setItem('logged', 'true');
            this.router.navigate(['/home']);
          } 
        }
      }
    });
  }
}
