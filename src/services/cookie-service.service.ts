import { Injectable } from '@angular/core';
import { User } from 'src/models/classes/users/user';

@Injectable()
export class CookieService {

  constructor() {
   }

   path: string = 'path=/';
   validade: string = '';
   
   createCookie(user: User): void {
    document.cookie = 'user' + "=" + (JSON.stringify(user) || '') + this.validade + "; " + this.path;
   }

   removeCookie(): void {
    document.cookie = 'user' + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   }

   cookieExists(cookieName): boolean {
    const cookies = document.cookie.split(';');
  
    for (var i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
  
      if (cookie.indexOf(cookieName + '=') === 0) {
        return true;
      }
    }
  
    return false;
  }

   getCookieValue(cookieName): string {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
  
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  
    return null;
  }

  
}
