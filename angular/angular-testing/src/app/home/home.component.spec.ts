import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';

import { HomeComponent } from './home.component';

describe('Testing Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService:UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent); // initialise the component
    userService = fixture.debugElement.injector.get(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have message ',()=>{
    expect(component.msg).toEqual('Home');
  });

  it('should render p tag',()=>{
    const element = fixture.nativeElement;
    expect(element.querySelector('p').textContent).toContain('home works!');
  });

  it('should have proper column headers',()=>{
    const element = fixture.debugElement.nativeElement;
    expect(element.innerHTML).not.toContain('id,name');
  });

  it('should render user table',()=>{
    const element = fixture.debugElement.nativeElement;
    expect(element.innerHTML).toContain('Id,Name');
    expect(element.innerHTML).toContain(userService.getAllUsers()[0].name);
  });

  it('should use users from User Service',()=>{
    expect(userService.getAllUsers()).toEqual(component.users);
    expect(component.users.length).toBeGreaterThanOrEqual(1);
  });
});

// describe('Name of the Test Suite',()=>{
//   // write all ur tests here
  
//   beforeEach(()=>{
//     console.log('Before each shall be called before every it aka test case');
//   });

//   beforeAll(()=>{
//     console.log('Before All shall be called before all it aka test case');
//   });

//   afterEach(()=>{
//     console.log('After each shall be called after every it aka test case');
//   });
//   afterAll(()=>{
//     console.log('After all shall be called before every it aka test case');
//   });
  
//   it('Name of Test Case ',()=>{
//     // This is where I will write my test case
//     // what can I Test
//     // 1. I can test methods / variables inside the component class i.e. .ts file
//     // 2. I can test my template file i.e. .html - so I can verify if the content was rendered successfully or not
//     // 3. I can test my services i.e. .ts files
//     // 4. I can test the service injections from components
//   });
//   it('Name 2 of Test Case ',()=>{
//     // This is where I will write my test case
//     // what can I Test
//     // 1. I can test methods / variables inside the component class i.e. .ts file
//     // 2. I can test my template file i.e. .html - so I can verify if the content was rendered successfully or not
//     // 3. I can test my services i.e. .ts files
//     // 4. I can test the service injections from components
//   });
// });