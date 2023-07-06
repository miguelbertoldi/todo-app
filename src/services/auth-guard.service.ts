import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/models/classes/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { CookieService } from "./cookie-service.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private userRepository: UserRepository,
    private cookieService: CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const logged: User = JSON.parse(this.cookieService.getCookieValue('user'));

    if (logged != null) {
      return true;
    }

    return false;
  }

}
