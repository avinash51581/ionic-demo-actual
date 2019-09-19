import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../models/constant';
import { RequestStatus } from 'src/app/models/RequestStatus';
import { LoginRequestModule } from '../models/loginRequestModule';
import { LoginResponseModule } from 'src/app/models/loginResponseModule';
const header = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    })};

  constructor(private http:HttpClient,private constant:Constant) { }

  public getSalt(): Observable<string> {
    return this.http.get(this.constant.API_URL+'getSalt', { headers: header, responseType: 'text' });
  }

  login(loginrequest:LoginRequestModule): Observable<LoginResponseModule> {
    return this.http.post<LoginResponseModule>(this.constant.API_URL + 'getLogin', loginrequest, this.httpOptions);
  }



  

  
}
