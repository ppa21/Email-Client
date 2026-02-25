import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            withCredentials: true
        });

        return next.handle(modifiedReq);
            // .pipe(
            //     filter(val => val.type === HttpEventType.Sent),
            //     tap(val => {
            //         console.log("Sent the request with credentials");
            //     })
            // );
    }
}
