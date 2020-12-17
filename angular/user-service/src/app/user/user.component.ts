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
}
