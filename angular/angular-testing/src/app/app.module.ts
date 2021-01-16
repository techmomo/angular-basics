import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(AppModule.routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  static routes = [
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'aboutus', component: AboutusComponent
    },
    {
      path: 'charts', component: ChartComponent
    },
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    }
  ]
}
