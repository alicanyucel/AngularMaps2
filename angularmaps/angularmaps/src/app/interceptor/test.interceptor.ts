import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable,of } from 'rxjs';
@Injectable()
export class TestInterCeptor implements HttpInterceptor {

  constructor(
  
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse)=>{
        console.log(err);
        if(err.status==400)
      console.log(err.error);
       else if(err.status==0)
     console.log("sunucuya baglanilamadi");
        return of()
      })
    );
  }
}