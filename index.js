const express = require('express')
 const app = express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide age")
    } else if(req.query.age<18){
        resp.send("You cannot access this website")
    }
    else{
    next();

    }
}
app.use(reqFilter)

 app.get('/',(req,resp) =>{
    resp.send("welcome to home page")
 })

 app.get('/users',(req,resp) =>{
    resp.send("welcome to Users Page")
 })


 app.listen(3200);