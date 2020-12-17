import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any[];
  errorMessage:string;
  constructor() { }

  ngOnInit(): void {
    this.addUsers(); // build user array
  }
  addUsers():void{
    this.users=[
      {
        id: 1,
        name: 'User1',
        email: 'user1@gg.com',
        dob: this.addDays(1)
      },
      {
        id: 2,
        name: 'User2',
        email: 'user2@gg.com',
        dob: this.addDays(2)
      },
      {
        id: 3,
        name: 'User3',
        email: 'user3@gg.com',
        dob: this.addDays(3)
      },
      {
        id: 4,
        name: 'User4',
        email: 'user4@gg.com',
        dob: this.addDays(4)
      }
    ]
  }
  addDays = (days:number):Date=>{
    let today:Date = new Date();
    today.setDate(today.getDate() + days);
    return today;
  }

  // html events
  eDeleteUser(id:string){
    const index = this.users.findIndex(u=>u.id == id);
    // delete found user
    this.users.splice(index,1); // using spice based on index 
    if(this.users.length == 0){
      this.users = undefined;
      this.errorMessage = 'No Users Found...!'
    }
  }
  eGetId(event){
    console.log(event.value);
    this.filterBySalary(1);
  }
  filterBySalary(pid:number):void{
    this.users.sort((a,b)=>{ 
      return b.id - a.id;
    });
    console.log(this.users);
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