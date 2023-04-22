// to chek theck the status and data

// const http = require('http')
// const data = require('./data')

// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-Type':'application-json'});
// resp.write(JSON.stringify(data));
// resp.end();
// }).listen(3200)

// const fs = require("fs");
// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// }else if (input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input");
// }
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');

// for(i =0;i <5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple file");
// }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(ite,);
//     })
// })

const fs = require('fs');
const http = require('http');
const path = require('path');
const dirPath =path.join(__dirname,'curd');

const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,"this is the apple file")
// fs.readFile(filePath,'utf8',(err,item)=>{
//     if (err) {console.log(err);}else{
//        console.log(item); 
//     }
    
// })
// fs.appendFile(filePath,"and this is append file system aaple.txt",(err)=>{
//     if(!err) console.log("file appened");
// })
fs.rename(filePath,`${dirPath}/fruts.txt`,(err)=>{
    if(!err) console.log("file appened");

})