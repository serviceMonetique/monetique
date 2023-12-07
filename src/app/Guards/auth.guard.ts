import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (Number(window.localStorage.getItem('user')) === 3) {
      console.log('You are logged in');
      return true; // User is allowed to access the route
    } else {
      this.router.navigate(['/']); // Redirect to the root page if the condition is not satisfied
      return false;
      console.log('You are not       logged in');// User is not allowed to access the route
    }
  }
}
