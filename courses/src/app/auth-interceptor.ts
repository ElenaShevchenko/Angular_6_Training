import {Injectable} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './user/user.model';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private currentUser: User;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const fakeToken = JSON.parse(localStorage.getItem('fakeToken')) || '58ebfdf772a49d09aeee10a8';
        const authReq = req.clone({
            headers: req.headers.set('Authorization', fakeToken)
        });

        return next.handle(authReq);
    }
}


