import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  counter:number = 0;
  first:number;
  second:number;
  users:any[];
  errorMessage:string;
  constructor() { 
    this.counter = 1;
    console.log("HELLO");
  }
  ngOnInit(): void { // start up method
    this.counter = 2;
    console.log("Ng INIT");
    this.loadData(); // initialise start up data 
  }
  ngOnDestroy():void{ // close up method
    this.counter = 0;
    console.log("Ng Destroy");
  }

  loadData(){
    this.loadNums();
    this.loadUsers();
    this.getErrorMessage();
  }
  loadNums():void{
    this.first =13;
    this.second = 5;
  }
  getErrorMessage():void{
    this.errorMessage='No Records Found';
  }
  loadUsers():void{
    this.users=[
      {
        id:1,
        name: 'Tom',
        email: 'tom@tt.com'
      },
      {
        id:2,
        name: 'John',
        email: 'joe@tt.com'
      },
      {
        id:3,
        name: 'Steve',
        email: 'st@tt.com'
      },
      {
        id:4,
        name: 'Adam',
        email: 'adam@tt.com'
      }
    ]
  }
  display():void{
    alert('Hello User');
  }
}
