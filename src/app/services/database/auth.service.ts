import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { CoreService } from '../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false
  token: any
  user: any

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) {
    this.getToken()
    this.token ? this.userdetail() : null;
  }

  async getToken() {
    const token = localStorage.getItem('token');
    this.token = JSON.parse(token);
    if(this.token != null) {
      const user = localStorage.getItem('user');
      this.user = JSON.parse(user);
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  get checkAuth() {
    this.getToken()
    return this.isLoggedIn
  }

  get profileImageUrl() {
    return this.user?.avatarImageUrl ? this.user?.avatarImageUrl : `https://ui-avatars.com/api/?name=${this.user?.first_name} ${this.user?.last_name}&color=7F9CF5&background=EBF4FF`
  }

  login(value: { username: string, password: string }): Observable<any> {
    return this.http.post(this.core.api_url + '/oauth/token', {
      grant_type: this.core.grant_type,
      client_id: this.core.client_id,
      client_secret: this.core.client_secret,
      username: value.username,
      password: value.password
    }).pipe(map(token => {
      localStorage.setItem('token', JSON.stringify(token))
      this.token = token
      this.isLoggedIn = true
      return token
    }))
  }

  logout() {
    return this.http.post<any>(this.core.api_url + '/api/user/passport/token/revoke', { tokenId: this.user?.authTokenId })
    .subscribe(
      () => this.clearStorage(),
      () => this.clearStorage()
    )
  }

  clearStorage() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.isLoggedIn = false;
    delete this.token;
    delete this.user;
    this.checkAuth
  }

  userdetail() {
    return this.http.get<any>(this.core.api_url + '/api/user/profile')
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user;
      return this.user;
    }))
  }

  permissionMatch(permission: string) {
    var isMatch = false;
    const permissionsList = _.map(this.user.roles, (e: { permissions: { name: string; }[]; }) => e.permissions.map((permission: { name: string; }) => permission.name))
    permissionsList.map((data: any[]) => data.map(permissionListed => permission == permissionListed ? isMatch = true : null))
    return isMatch;
  }

  permissionMatchAny(permissions: string[]) {
    var isMatch = false;
    const permissionsList = _.map(this.user.roles, (e: { permissions: { name: string; }[]; }) => e.permissions.map((permission: { name: string; }) => permission.name))
    permissionsList.map((data: any[]) => data.map(permission => permissions.map((data: any) => permission == data.permission ? isMatch = true : null)))
    return isMatch;
  }
}
