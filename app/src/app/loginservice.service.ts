import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {User} from './user';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  constructor(private http:HttpClient) { }
 public loginuserfromremote(user:User):Observable<any>{
  
return this.http.post<any>("http://localhost:8080/user/login",user)

  }
}
