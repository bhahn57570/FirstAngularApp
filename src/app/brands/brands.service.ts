import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Brand } from './brand';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token',
    //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  })
};


@Injectable()
export class BrandsService {
  brandsUrl = 'http://localhost:3000/brand';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('BrandsService');
  }

  /** GET brands from the server */
  getBrands (): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.brandsUrl, httpOptions)
      .pipe(
         tap(heroes => this.log(`fetched heroes`)),
         catchError(this.handleError('getBrands', []))
      );
  }

  // return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(heroes => this.log(`fetched heroes`)),
  //       catchError(this.handleError('getHeroes', []))
  //     );


  /* GET brands whose name contains search term */
  searchBrands(term: string): Observable<Brand[]> {
    term = term.trim();

    // Add safe, URL ecoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Brand[]>(this.brandsUrl, options)
      .pipe(
        catchError(this.handleError<Brand[]>('searchBrands', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new brand to the database */
  addBrand (brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.brandsUrl, brand, httpOptions)
      .pipe(
        catchError(this.handleError('addBrand', brand))
      );
  }

  /** DELETE: delete the brand from the server */
  deleteBrand (id: number): Observable<{}> {
    const url = `${this.brandsUrl}/${id}`; // DELETE api/brands/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteBrand'))
      );
  }

  /** PUT: update the brand on the server. Returns the updated brand upon success. */
  updateBrand (brand: Brand): Observable<Brand> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Brand>(this.brandsUrl, brand, httpOptions)
      .pipe(
        catchError(this.handleError('updateBrand', brand))
      );
  }


    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      // this.messageService.add('HeroService: ' + message);
      console.log('HeroService: ' + message);
    }
}
