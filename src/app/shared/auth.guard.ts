import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(next, url);
  }
  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.auth.isLogin()) {
      const userRole = this.auth.getRole();

      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        if(userRole == 'admin'){
          this.router.navigate(['/dashboard']);
        }
        else{
          this.router.navigate(['/home']);
        }
        return false;
      }
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
    // if (this.auth.isLogin()) {
      
    //   return true;
    // }
    // this.router.navigate(['login']);
    // return false;
}
