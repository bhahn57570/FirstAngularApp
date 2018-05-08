import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // extract error message from http body if an error occurs
        return next.handle(request);
        // .pipe(
        //     catchError(errorResponse => {
        //         debugger;
        //     return Observable.throw(errorResponse.error)
        // }));
    }
}