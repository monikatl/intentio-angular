import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Parish } from '../configurator/parish';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }


  url = 'monika.alwaysdata.net'


//   createParish(parish: Parish): Observable<Parish> {
//     return this.http.post<Parish>(this.url, parish, httpOptions)
//       .pipe(
//         catchError(this.handleError('addHero', parish))
//       );
//   }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}