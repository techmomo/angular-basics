const constants = require('./constants');
const service = require('./service/userService');
const http = require('http');

const server = http.createServer((request,response)=>{
    console.log('Server Connection');
    if(request.url === '/'){
        response.write('Hello world');
        response.end();
    }
    if(request.url === '/users' /** in case of method is post */){
        const userFound = service.findUserById(constants.users,2);
        response.write(JSON.stringify(userFound));
        response.end();
    }
}).listen(5400);
//console.log(`Server Started on ${port}`);