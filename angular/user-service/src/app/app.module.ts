import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FooterComponent,
    HeaderComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
