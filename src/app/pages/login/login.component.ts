import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/classes/users/user';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserRepository } from 'src/repositories/user.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  userPassword: string;
  users: User[];
  logged: User;

  API_URL: string = 'http://localhost:4300/users'

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
            this.router.navigate(['/tarefas']);

          } 
        }


      }
    })
  }



}
