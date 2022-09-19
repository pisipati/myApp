import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';
import {Router} from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({

  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  item:Item=new Item();
  submitted=false;
  constructor(private itemservice:ItemService,private router:Router) { 

  }

  ngOnInit() {
  }

saveItem(){
  this.itemservice.createItem(this.item).subscribe(data=>{console.log(data);
 
this.gotoList();});
}
onSubmit(){
  this.submitted=true;
  this.saveItem();
}
gotoList(){
  this.router.navigate(['/item-list']);

}
}
