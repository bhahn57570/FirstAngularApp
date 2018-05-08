import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {

    private handleError: HandleError;

    constructor(private http: HttpClient,

        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('UserService');
    }

    getAll() {
        return this.http.get<User[]>('/api/users')
            .pipe(
                catchError(this.handleError('getAll', []))
            );
    }

    getById(_id: string) {
        return this.http.get('/api/users/' + _id).pipe(
            catchError(this.handleError('getById', []))
        );
    }

    create(user: User) {
        return this.http.post('/api/register', user)
            .pipe(
                catchError(this.handleError('create', []))
            );
    }

    update(user: User) {
        return this.http.put('/api/users/' + user._id, user)
            .pipe(
                catchError(this.handleError('update', []))
            );
    }

    delete(_id: string) {
        debugger;
        return this.http.delete('/api/users/' + _id)
            .pipe(
                catchError(this.handleError('delete', []))
            );
    }
}