import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';




@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
 
    error: string;

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        
        return next.handle(request).pipe(catchError(err => {
            console.log(err);
            console.log("In Error Interceptor:" + err.status);
            if (err.status === 0) {
                this.error = 'Server Error, Please contact system administrator';
            }
           else if (err.status === 401) {
                this.error = 'Authentication Failed';
            } else if (err.status === 403) {
                this.error = 'Invalid Username Or Password';                   
            } 
            else if (err.status === 400) {
                this.error = 'Invalid Request';
            } else if (err.status === 500) {
                
                if (err.error.message === 'Invalid username or password') {
                            this.error = 'Invalid Username Or Password';                   
                            throw this.error;
                } else if (err.error.message === 'Invalid form fields') {
                            this.error = 'Invalid form fields';                   
                            throw this.error;
                }
                if (err.error.message === 'validation_failed') {
                          this.error = 'Operation failed Please try again';                       
                          throw this.error;
                } else if (err.error.message === 'Server Error, Please contact system administrator') {
                            this.error = 'Server Error, Please contact system administrator';
                            throw this.error;                       
                }else {
                        this.error = 'Server Error, Please contact system administrator';
                        throw this.error;
                }
            } else if(err.status === 501) { 
                  this.error = 'Operation failed Please try again';
                  throw this.error;
            }
            return throwError(this.error);
        }),map((event: HttpEvent<any>) => {
            return event;
        }));

       
    }
    


}