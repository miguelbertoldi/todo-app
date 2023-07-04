import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/models/classes/users/user";
import { UserRepository } from "src/repositories/user.repository";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private userRepository: UserRepository
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const logged: boolean = JSON.parse(localStorage.getItem('logged'));

    if (logged) {
      return true;
    }

    return false;
  }

}
