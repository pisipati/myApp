import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FreeapiService } from './freeapi.service';
import { Item } from './item';
import { Ng2SearchPipe } from 'ng2-search-filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private freeapiservice:FreeapiService){}
  lstitem!: Item[];
  title = 'Online Bookstore';
  searchText1:any;
  public searchInput:String='';
  public searchResult:Array<any>=[];
  public seriesList:Array<any>=[];
  page = 1;
  pageSize = 4;
  searchText:any;
  names=[{country:'india'},{country:'china'}];
  
  ngOnInit(){
    this.freeapiservice.getAlbums().subscribe
    (
      data=>
      {
        this.lstitem=data;
      }
    )
  }
}
