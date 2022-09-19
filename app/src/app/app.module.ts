import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{ FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';
import { FreeapiService } from './freeapi.service';
import { SearchComponent } from './search/search.component';
import { ItemService } from './item.service';
import { BookCategoryComponent } from './book-category/book-category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemListComponent,
    ItemDetailsComponent,
    CreateItemComponent,
    EditListComponent,
    SearchFilterPipe,
    SearchComponent,
    BookCategoryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [FreeapiService,
  ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
