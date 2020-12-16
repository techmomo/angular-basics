import { Component } from '@angular/core';

@Component({
  selector: 'hello-world', // this is the name of html element
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: '<h3>{{title}}</h3>'
})
export class AppComponent {
  title = 'hello';
}
