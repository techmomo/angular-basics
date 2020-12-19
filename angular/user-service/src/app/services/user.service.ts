import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  baseUrl:string = environment.baseUserUrl

  // DI for http client service
  constructor(private http:HttpClient) { }

  filterUsersBySalary(salary:number){ // http client with subcriber
    const url = this.baseUrl +`/salary/greater/${salary}`;
    // this.http.get(url).subscribe(res=>{ // get users from rest api using HTTP Client Module
    //   res.data.forEach(element => {
    //     console.log(element);
    //   });
    // })
    return this.http.get(url); // just make a call to the rest api & return the actual subcriber object
  }
  // filterUsersBySalary(salary:number):Promise<object>{ // http client module with promises
  //   const url = this.baseUrl +`/salary/greater/${salary}`;
  //   // this.http.get(url).subscribe(res=>{ // get users from rest api using HTTP Client Module
  //   //   res.data.forEach(element => {
  //   //     console.log(element);
  //   //   });
  //   // })
  //   return this.http.get(url).toPromise();
  // }
  // filterUsersBySalary(salary:number):Promise<string>{ // fetch api with promises
  //   // fetch all users from REST API 
  //   // call a rest api
  //   // STEP 1 : test status api
  //   const url = 'http://localhost:12345' + `/users/salary/greater/${salary}`;
  //   return fetch(url).then(res=>res.json()).then(res=>res.data);
  // }
  
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

  saveUser(user:any){ // http client to use post method i.e. send request body
    let url = this.baseUrl + '/add';
    this.http.post(url,user)
    .toPromise()
    .then(rs=>console.log(rs))
    .catch(e=>console.error(e));
  }
}

// Assignment :
// Move business logic to service layer
// split logic across empservice & project service
// move master data to specific file e,g. user.ts has users , emp.ts has employees & project.ts has projects

// emp1 = {
//   id: 1,
//   name: 'xyz',
//   email: 'ee@gg.com', // should come from user entity
//   pname: 'ATT',  // this is coming from project entity
//   salary: 1000 // this is coming from employee entity
// }

// emp2 = {
//   id: 2,
//   name: 'abc',
//   email: 'ee@gg.com', // should come from user entity
//   pname: 'ATT',  // this is coming from project entity
//   salary: 2500 // this is coming from employee entity
// }



//projects dropdown == list of prjs

// emps dropdown == list of emps

// add emp 

// p1   
// p2

// e1
// e2

// ADD