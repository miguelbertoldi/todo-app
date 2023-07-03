import { Injectable } from '@angular/core';
import { User } from 'src/models/classes/users/user';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor() {
   }

   path: string = 'path=/';
   validade: string = ''
   

   createCookie(user: User): void {
    document.cookie = user.name + "=" + (user.name || '') + this.validade + "; " + this.path;
   }

  
}
