import { CookieService } from './../services/cookie-service.service';
import { Injectable } from "@angular/core";
import { User } from "src/models/classes/users/user";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

const API_URL = 'http://localhost:4300/users';

@Injectable()
export class UserRepository {

    constructor(
        private httpClient: HttpClient,
        private cookieService: CookieService,
        private router: Router
    ) {}

    API_URL: string = 'http://localhost:4300/users';

    public getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(API_URL)
        .pipe(
            map(values => {
                const users: User[] = [];
                for (const value of values) {
                    users.push(Object.assign(new User(), value));
                }
                return users;
            })
        );
    }

    public login(userId: string, userPassword: string): void {
      this.getUsers().subscribe({
        next: (value) => {
          for (const i of value) {
            if (i.id == userId && i.password == userPassword) {
              this.cookieService.createCookie(i);
              this.router.navigate(['/home']);
            }
          }
        }
      });
    }

    public registerUser(user: User): void {
      const headers = new HttpHeaders({'myHeader': 'header'})
      this.httpClient.post(
        this.API_URL,
        user, {headers: headers})
        .subscribe((res) => {
          console.log(res);
        })
    }

}
