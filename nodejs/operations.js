class Operations{
    
    constructor(first,next){
        console.log('Operations class');
        this.first = first;
        this.next = next;
    }
    _add(){
        return this.first + this.next;
    }
    _diff(){
        return this.first - this.next;
    }
    _mul(){
        return this.first * this.next;
    }
}
module.exports = Operations; // export it directly as a class 