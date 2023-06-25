import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

const API_URL = 'https://run.mocky.io/v3/62f94d04-a430-4a64-a1bb-2b3d019cbf58';

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
