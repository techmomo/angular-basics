class Service{
    private id:number
    name:string // default is public
    protected email:string
    readonly projectCode:string;
    constructor(id:number,name:string,projectCode:string){
        this.id = id;
        this.name = name; 
        this.projectCode = projectCode;
    }
    getName(){
        return this.name;
    }
    setEmail(email:string){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
}

const obj1 = new Service(1,'Mohsin','p11');
console.log(obj1.getName());
obj1.setEmail('test@gg.com');
console.log(obj1.getEmail());

console.log(obj1.projectCode);
// scopes
// public -- full visibility
// private - local to class
// protected - available in sublass as well
