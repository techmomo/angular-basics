import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { masterProjects } from '../data/project.data';
import { Project } from '../entities/Project';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup
  private user:any
  errorMessage:string

  project:Project = masterProjects[0];
  constructor(private builder:FormBuilder) { 
    this.buildLoginForm();
    this.errorMessage='' // reset to default
  }

  ngOnInit(): void {
  }
  buildLoginForm(){
    this.login = this.builder.group({
      username: this.project.pname,
      password: ''
    })
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
}
