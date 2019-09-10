import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class RoutesInterceptor implements CanActivate, CanActivateChild {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.validatorAuthenticated();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.validatorAuthenticated();
  }

  validatorAuthenticated(): boolean {
    if (!localStorage.getItem('auth')) {
      this.router.navigate(['./login']);
      return false;
    }
    return true;
  }
}
