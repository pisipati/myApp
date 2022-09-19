import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Bookcategory } from './bookcategory';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item!: any;
private baseUrl='http://localhost:8080/api/items';
private categoryUrl = "http://localhost:8080/api/items";
  constructor(private http:HttpClient) { }
  getItemById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createItem(item:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,item);
  }
  editItem(id:number,item:Object):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,item);
  }
  deleteItem(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getItemList():Observable<Item[]>{
    return this.http.get<Item[]>(`${this.baseUrl}`);
  }
  getUsers(page: number){
    return this.http.get(this.baseUrl + '?page=' + page);
  }
 searchItems(keyword:string,currentPage:number,pagesSize:number):Observable<GetResponseItems>{
  const searchUrl=`${this.baseUrl}/category/searchbykeyword?name=${keyword}&page=${currentPage}`;
  return this.http.get<GetResponseItems>(searchUrl);
 }
 searchItemsByCategory(keyword:string,currentPage:number,pagesSize:number):Observable<GetResponseItemCategory>{
  const searchUrl=`${this.baseUrl}/search/searchbykeyword?name=${keyword}&page=${currentPage}`;
  return this.http.get<GetResponseItemCategory>(searchUrl);
 }
 getBookCategories(): Observable<Bookcategory[]>{
  return this.http.get<GetResponseItemCategory>(this.categoryUrl).pipe(
    map(response => response._embedded.bookCateogry)
  );
}
}
 interface GetResponseItems{
  _embedded:{
    items:Item[];
  },
  
  page:{
    size:number;
    totalElements:number;
    totalPages:number;
    number:number;
  }
}
interface GetResponseItemCategory{
  _embedded: {
    bookCateogry: Bookcategory[];
  }
}
