import { Injectable } from "@angular/core";
import { User } from "src/models/classes/users/user";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

const API_URL = 'http://localhost:4300/users';

@Injectable()
export class UserRepository {

    constructor(
        private httpClient: HttpClient
    ) {}

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

    

}
