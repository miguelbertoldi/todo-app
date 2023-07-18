import { UserRepository } from 'src/repositories/user.repository';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/classes/users/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: '',
    name: '',
    password: '',
    email: ''
  }



  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userRepository: UserRepository
  ) {
  }

  ngOnInit() {
  }

  register(): void {

    if (this.user.name != '' &&
    this.user.password != '' &&
    this.user.email != '' &&
    this.user.id != '') {
      this.userRepository.registerUser(this.user);
      this.router.navigate([''])
    }
  }

}
