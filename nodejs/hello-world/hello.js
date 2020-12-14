const http = require('http');
console.log('hello');

http.createServer((rq,rs)=>{
    if(rq.url == '/'){
        rs.write("Welcome to Node Js");
        rs.end();
    }
}).listen(7790);


// ^2.0.6 i.e. using caret 2.0.6 --- 2(Major / Release).1(Minor).9(Patch version)  (we can upgrade to latest minor version)
// ~2.0.6 i.e tilde --- 2.0.9 (we can upgrade to latest patch version)