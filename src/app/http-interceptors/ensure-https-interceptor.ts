import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {

  private endPoint = 'http://localhost:3000';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // clone request and replace 'http://' with 'https://' at the same time
    // const secureReq = req.clone({
    //   url: req.url.replace('http://', 'https://')
    // });

    // send the cloned, "secure" request to the next handler.
    // return next.handle(secureReq);

    let re = /^(http(s)?)/i;
    let match = req.url.match(re);
    if (!match) {
      return next.handle(req.clone({
        url: this.endPoint + req.url
      }));
    }
    // const secureReq = req.clone({
    //   url: req.url.replace('http://', 'https://')
    // });

    // send the cloned, "secure" request to the next handler.
    // return next.handle(secureReq);

    // brandsUrl = 'http://localhost:3000/api';  // URL to web api

    return next.handle(req);
  }
}
