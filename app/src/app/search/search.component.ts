import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchText1:any;
  names=[{country:'india'},{country:'china'}];
  lstitem=[{country:'india'},{country:'china'}];
  constructor(private router:Router,private http:HttpClient) { }
  private baseUrl='http://localhost:8080/api/items';
  ngOnInit() {
  }
  getItemById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getItemByCategory(category:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${category}`);
  }
searchItems(keyword:string){
  console.log('keyword',keyword);
  if(keyword)
  this.router.navigateByUrl('/search/'+keyword);
  else
  this.router.navigateByUrl('/category/'+keyword);

}

searchItemsByCategory(keyword:string){
  console.log('keyword',keyword);
  this.router.navigateByUrl('/category/'+keyword);
}
}
