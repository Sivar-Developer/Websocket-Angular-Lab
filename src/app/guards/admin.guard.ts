import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { AuthService } from '../services/database/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    private message: NzMessageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let permission = childRoute.data["permission"] as string;
    if(permission) {
      if(this.authService.permissionMatch(permission)) { return true }
      else {
        this.router.navigateByUrl('/');
        this.message.error('User does not have the right permissions.')
        return false;
      }
    } else {
      this.router.navigateByUrl('/');
      this.message.error('User does not have the right permissions.')
      return false;
    }
  }
  
}
