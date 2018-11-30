import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswordDemoPage } from '../password-demo/password-demo';
import { CompanyDemoPage } from '../company-demo/company-demo';
import { UserDemoPage } from '../user-demo/user-demo';
import { Demo1Page } from '../demo1/demo1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  name1:string;
  name:string="xyz";
 // flag:boolean=false;
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
  //  this.name1;
  }
 
 // @Input() name:n;
//   user_info = [{
//     "user_name" : "Jason",
//     "company_name" : "xyz",
//     "u_password" : "123"
// },
// {
//   "user_name" : "Ank",
//   "company_name" : "ABC",
//   "u_password" : "456"
// }];
  demo1()
  { 
   // console.log(this.user_info[0]);
    
  //  for(let i in this.user_info)
  //   {
  //   console.log("i= "+this.user_info[i].user_name);
  //   if(this.user_info[i].user_name===this.name1)
  //   {
  //     this.flag=true;
  //     break;

  //   }
  //   }
  //   console.log(this.name1);
  //   if(this.flag)

  if(this.name1===this.name)
    this.navCtrl.push(UserDemoPage);
    else
    alert("Invalid Company name ")
  
  }

}
