import { Component, OnInit } from '@angular/core';
import { Bookcategory } from '../bookcategory';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  bookCategories!: Bookcategory[];
  constructor(private itemservice:ItemService) {

   }

  ngOnInit(): void {
    this.listBookCategories();
  }
  listBookCategories(){
    this.itemservice.getBookCategories().subscribe(
      data => this.bookCategories = data
    );
}
}
