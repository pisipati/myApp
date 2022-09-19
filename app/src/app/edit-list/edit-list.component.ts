import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import { NgModel } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
 id! :number;
 item:Item=new Item();

  constructor(private route: ActivatedRoute,private router:Router,private itemservice:ItemService) { }

  ngOnInit():void {
     this.item= new Item();
    this.id=this.route.snapshot.params['id'];
    this.itemservice.getItemById(this.id).subscribe(data=>{
      
      this.item=data;});
    }
    editItem(id:number,item:Item){
      this.itemservice.editItem(this.id,this.item).subscribe(data=>{
    this.goTolist();})
    }
    onSubmit(){
      this.itemservice.editItem(this.id,this.item).subscribe(data=>{
        this.goTolist();})
      
    }
  goTolist(){this.router.navigate(['/item-list']);
}
  }


