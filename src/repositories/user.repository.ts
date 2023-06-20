import { Injectable } from "@angular/core";
import * as users from '../data/users';

@Injectable()
export class UserRepository {
    
    getUsers() {
        return users;
    }
}