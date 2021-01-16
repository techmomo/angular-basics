import { fakeAsync, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Location } from "@angular/common";
import { AppModule } from './app.module';

describe('AppComponent', () => {

  let router:Router;
  let location:Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule.withRoutes(AppModule.routes) 
  ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location= TestBed.get(Location);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular-testing app is running!');
  // });

  it('should navigate to "" redirects to /home ', ()=>{
    router.navigate([""]).then(()=>{
      expect(location.path()).toBe("/home");
    })
  });

  it('should navigate to "/aboutus" when  trying /aboutus ',()=>{
    router.navigate(["/aboutus"]).then(()=>{
      expect(location.path()).toBe("/aboutus");
    });
  });
});
