import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(
    private authService: AuthService,
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return true;
  }
}
