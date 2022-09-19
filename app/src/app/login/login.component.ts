import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  msg='';
 
  
  constructor(private service:LoginserviceService,private route:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  login(){
    this.service.loginuserfromremote(this.user).subscribe(
      data=>{
       console.log("response recieved");
       this.route.navigate(['/item-list']);
    
      },
      error =>{
        console.log("exception occured");
        this.msg=" Wrong Credentials !!!";
      });
       }
}
