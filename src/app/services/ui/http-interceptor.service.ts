import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../database/auth.service';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  token: any;
  constructor(
    private core: CoreService,
    private auth: AuthService
  ) { }

  handleError(error: HttpErrorResponse) {
    if(error.error?.message == 'Unauthenticated.') {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
     }
    return throwError(error)
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'ngsw-bypass': '',
        'Accept': 'application/json',
      })
    }

    req = req.clone(httpOptions)
    const clone = this.addAuthenticationToken(req)

    return next.handle(clone)
    .pipe(
      catchError(this.handleError)
    )
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    if (!this.auth.token) {
      return request;
    }
    if (!request.url.match(this.core.api_url)) {
      return request;
    }
    return request.clone({
      headers: request.headers.set('Authorization', "Bearer " + this.auth.token?.access_token)
    });
  }
}
