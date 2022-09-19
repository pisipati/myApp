import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ItemListComponent } from '../item-list/item-list.component';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
id!:number;
item!:Item;
  constructor(private route:ActivatedRoute,private router:Router,private itemservice:ItemService) { }

  ngOnInit() {
    this.item = new Item();
    this.id=this.route.snapshot.params['id'];
    this.itemservice.getItemById(this.id).subscribe(data=>{
      console.log(data)
      this.item=data;
    });
    }
    editItem(){
      this.itemservice.editItem(this.id,this.item).subscribe(data=>{console.log(data);this.item=new Item();this.goTolist();});
    }
    goTolist(){
      this.router.navigate(['item-list']);
    }
  }


