import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from "./product";

@Injectable()
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        // irl we can send server to remote logging infostructure
        // instead of just console logging
        let errorMessage = '';
        if ( err.error instanceof ErrorEvent) {
            // client side or network error occurred
            errorMessage = 'An error occurred: ${err.error.message}';
        } else {
            // backend returned unsuccessfully
            errorMessage = 'Server returned code: ${err.status}, error message is ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
