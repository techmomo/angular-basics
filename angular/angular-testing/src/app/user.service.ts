import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any[]
  constructor() { 

  }
  getAllUsers():any[]{
    return [
      {
        id: 1,
        name: 'Tom'
      },
      {
        id: 2,
        name: 'John'
      }
    ];
  }
}
