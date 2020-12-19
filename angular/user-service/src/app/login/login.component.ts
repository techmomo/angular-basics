import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { masterProjects } from '../data/project.data';
import { Project } from '../entities/Project';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup
  registration:FormGroup
  private user:any
  errorMessage:string
  error:string
  users:any;
  userForm:FormGroup

  project:Project = masterProjects[0];
  constructor(private builder:FormBuilder,private service:UserService) { 
    this.buildLoginForm();
    this.buildRegisterForm(); 
    this.buildUserForm();
    this.errorMessage='' // reset to default
    console.log(this.registration);
  }

  ngOnInit(): void {
  }
  buildLoginForm(){
    this.login = this.builder.group({
      username: this.project.pname,
      password: ''
    });
  }
  buildUserForm(){
    this.userForm = this.builder.group({
      salary: 0
    });
  }
  buildRegisterForm(){
    this.registration= new FormGroup({
      email: new FormControl('',[ 
        Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    });
  }

  loginUser(){
    //console.log(this.login);
    this.user= {
      username: this.login.value.username,
      password: this.login.value.password
    }
    //
    if(this.user.password== '' || this.user.username==''){
      this.errorMessage = 'Invalid or not Credentials specified'
    }
    console.log(this.user);
  }
  register(){
    console.log(this.registration);
    let registerUser = {
      email: this.registration.value.email,
      password : this.registration.value.password
    }
    console.log(registerUser);
    // save user 
  }
  getUsers(){
    this.service.filterUsersBySalary(this.userForm.value.salary).then(data=>{
      console.log(data);
      this.users = data;
    });
  }
}
