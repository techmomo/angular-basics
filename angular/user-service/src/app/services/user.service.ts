import { Injectable } from '@angular/core';
import { Service } from './Service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Service{
  constructor() { }

  //
  get(){

  }
  add(){

  }
  getAll(){

  }
  
  getMessage():void{
    console.log("User Service : getMessage()");
  }
  addDays = (days:number):Date=>{
    let today:Date = new Date();
    today.setDate(today.getDate() + days);
    return today;
  }
  buildUsers():any[]{
    return [
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
  deleteUserById(users:any[],id:string):any{
    const index = users.findIndex(u=>u.id == id);
    let obj = {
      users: users,
      errorMessage : ''
    }
    // delete found user
    users.splice(index,1); // using spice based on index 
    if(users.length == 0){
      obj.users = undefined;
      obj.errorMessage = 'No Users Found...!'
    }
    return obj;
  }
  getUserById(users:any[],id:string){

  }
}


// Assignment :
// Move business logic to service layer
// split logic across empservice & project service
// move master data to specific file e,g. user.ts has users , emp.ts has employees & project.ts has projects

