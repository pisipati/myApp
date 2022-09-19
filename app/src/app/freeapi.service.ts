import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private http:HttpClient) { }
  baseurl="http://localhost:8080/api/items";
  getAlbums():Observable<any>
  
  {
    return this.http.get<Item[]>(`${this.baseurl}`);
  }
}
