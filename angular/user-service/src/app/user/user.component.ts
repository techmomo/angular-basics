import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Service } from '../services/Service';
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
  // constructor injection
  constructor(private service:UserService,private eService:EmployeeService) { }

  ngOnInit(): void {
    this.users = this.service.buildUsers(); // build user array  
    //this.myService.getAll();
    // Service user = new UserService();
    // Service emp = new EmployeeService();
    // const user = new UserService();
    // const emp = new EmployeeService();
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

// create service
// ng g s services/user(name of the service)