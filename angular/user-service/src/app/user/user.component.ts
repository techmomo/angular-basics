import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any[];
  errorMessage:string;
  // inject userservice into user component
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.users = this.service.buildUsers(); // build user array  
  }
  // html events
  eDeleteUser(id:string){
    let obj = this.service.deleteUserById(this.users,id);
    this.users = obj.users;
    this.errorMessage = obj.errorMessage;

  }
  eGetId(event){
    console.log(event.value);
  }
}

// ng new user-service // create a new angular project
// ng g c user // create a new component
// ng g c footer 
// ng g c header

// object structure
// let employees = [
//   { // eid ename project name pbudget 
//     eid: 1,
//     ename: 'XYZ',
//     email: 'a@gg.com',
//     project:{
//       pid: 1,
//       pname: 'Roche',
//       budget: 10000
//     },
//     salary: 500
//   },
//   {
//     eid: 2,
//     ename: 'XYZ',
//     email: 'a@gg.com',
//     project:{
//       pid:2,
//       pname: 'ATT',
//       budget: 7000
//     },
//     salary: 600
//   }
// ]