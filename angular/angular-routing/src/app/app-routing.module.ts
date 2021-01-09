import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutComponent
  },
  {
    path: 'contact-us', component: ContactComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: '', redirectTo: 'home' , pathMatch: 'full' // default rendered component redirection to an existing path
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
