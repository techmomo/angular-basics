class A{ //simple class without a constructor
    name:string
    getName(){
        this.name = 'Test';
        return this.name;
    }
}

const obj = new A();
console.log(obj.getName());

class B {
    id:number
    name:string
    private counter:number = 0 // specify a default value
    protected useMe:string
    static parent:number = 5;
    constructor(cid:number,name:string){
        this.id = cid; // using this keyword
        this.name = name; 
        // we can use the same name, in typescript all class level attributes are accessible using this keyword
    }
    getDetails():object {
        this.counter +=1;
        this.useMe = 'getDetails was Called';
        return {
            id: this.id,
            name: this.name
        };
    }
    getHiddenValues():any{
        return { counter: this.counter,message: this.useMe };
    }
}
const obj1 = new B(15,"Mohsin Khursheed");
console.log(obj1.getDetails());
console.log(obj1.getDetails());
console.log(obj1.getHiddenValues()); // since we can access private or protected variables

class C extends B{
    static num:number = 1; // static variable
    readonly key:number;
    constructor(cid:number,name:string,msg:string,key:number){
       super(cid,name); // call parent parametised constructor -- use super keyword to call parent one
       this.useMe = msg; // useMe is accesible in parent class since its protected
       this.key = key; // read only can be initialised only once within the constructor or at the time of declaration
   } 
   getMessage():string{
        //const username:string = 'Admin'; // this is useless as the scope is confined to this method
        return this.useMe;
   }
   getValue():number{
        //this.key = 15; // not possible since this is read only
       return C.num; // static attributes are accessible only via class & not using this keyword
   }
   static getNum():number{ 
       //return this.num; // this is a bad & ambiguous practice use class name instead
       // use this.parent or ClassName.parent for static variables of
       return C.num + this.parent;
   }
}
const obj2 = new C(7,"Techmomo","I am in Class C - Child",99);
const obj3 = new C(6,"Test","Child Class",53);
console.log(obj2.getDetails());
//console.log(obj2.getDetails());
console.log(obj2.getHiddenValues()); 
console.log(obj2.getMessage());

console.log(obj2.getValue());
C.num = 7; // re-assign a new value
console.log(obj2.getValue());

C.num = 5; // re-assign a new value
console.log(C.getNum()); // access static function directly via class name 
console.log(obj2.key);
console.log(obj3.key);

interface I2 extends A{
    getUser:()=>void
}

class D implements I2{
    name:string

    constructor(name:string){
        this.name = name;
    }
    getUser(){
        //I2.get
    }
    getName():string{
        return this.name;
    }
}
// abstract class
abstract class Org{
    name:string = ''

    display(name:string):void{
        console.log(this.name);
    }
    abstract getMessage(msg:string):string; // this is an abstract method
}

class Google extends Org{
    getMessage(str:string){
        return str
    }
}