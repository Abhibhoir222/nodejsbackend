const express = require('express')
const app = express();

app.get("",(req,resp)=>{
    // resp.send("Welcome, to the Home Page")
    resp.send(`
    <h1>hellow  this is welcome page </h1> <a href="/about"> Go to about page </a>
    `);
})

app.get("/about",(req,resp)=>{
    // resp.send("Welcome, to the about Page")
    resp.send(`
    <input type="text" placeholder="User name"/>
    <button> Click Me </button>
    <a href="/"> Go to home page</a>
    `);
})

app.get("/about",(req,resp)=>{
    // resp.send("Welcome, to the about Page")
    resp.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    <button> Click Me </button>
    <a href="/"> Go to home page</a>
    `);
})

app.listen(3200);   