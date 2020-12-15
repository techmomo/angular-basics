function list<T>(params:T[]) { // specify generics type on method
    return new Array<T>().concat(params);
}

let _nums = list<number>([10,12,15]);
let _strs = list<string>(["33","66"]);



function map<T,U>(param1:T,param2:U) {
    console.log(typeof param1 +' --- '+ typeof param2);
}

map<number,string>(8,'Hello Generics');

class MyMap<K,V>{
    private key:K;
    private value:V;
    
    constructor(key?:K,value?:V){ // in case if we want the constructor args to be optional
        this.key = key;
        this.value = value;
    }
    add(key:K,value:V):void{
        this.key = key;
        this.value = value;
    }
    get():void{
        console.log(`KEY : ${this.key}, VALUE : ${JSON.parse(JSON.stringify(this.value))}`);
    }
}

const obj4 = new MyMap<string,string>(); // give some default values
obj4.add("ONE", JSON.stringify({ id:4, name : "sample"}));

obj4.get();