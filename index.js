const http = require('http');

// http.createServer((req,resp)=>{
//     resp.write("Hello this is my first node js program")
//     resp.end();
// }).listen(3500)

function dataControl(req,resp) {
    resp.write("Hello, wolrd in node js");
    resp.end();
    
}

http.createServer(dataControl).listen(3501);