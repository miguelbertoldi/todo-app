import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/classes/users/user';
import { UserWtCard } from 'src/models/classes/users/userWtCard';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserWtCard = {
    id: '',
    name: '',
    password: '',
    email: ''
  }

  API_URL: string = 'http://localhost:4300/users';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { 
  }

  ngOnInit() {
  }

  register(): void {
    const headers = new HttpHeaders({'myHeader': 'header'})
    this.httpClient.post(
      this.API_URL, 
      this.user, {headers: headers})
    .subscribe((res) => {
      console.log(res);
    })

    this.router.navigate([''])
  }

}
