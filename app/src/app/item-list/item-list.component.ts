import { Component, OnInit } from "@angular/core";
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { Observable } from "rxjs";
import { ItemService } from "../item.service";
import { Router } from '@angular/router';
import {Item} from "../item";
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items !:Observable<Item[]>;
  item : Item = new Item();
 
  constructor(private itemservice:ItemService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.items=this.itemservice.getItemList();
  }
  deleteItem(id:number){
    this.itemservice.deleteItem(id)
    .subscribe(
    data=>{
      console.log(data);
      this.items=this.itemservice.getItemList();});
  }
  itemDetails(id:number){
    this.router.navigate(['/details',id]);
  }
  editItem(id:number,item:Item){
    this.itemservice.editItem(id,item).subscribe(data=>{console.log(data);
    this.item=new Item();
  this.goTolist();})
  }
  createItem(item:Item){
this.saveItem();
  }
 
goTolist(){this.router.navigate(['/items']);
}
saveItem(){
  this.itemservice.createItem(this.item).subscribe(data=>{console.log(data);
 
this.gotoList();});
}
onSubmit(){
 
  this.saveItem();
}
gotoList(){
  this.router.navigate(['/items']);

}
}
