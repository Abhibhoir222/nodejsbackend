const express = require('express')
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'public')

app.set('view engine','ejs')

app.get('/profile',(req,resp)=>{
    const user= {
        name: 'abhishek',
        email:'abhi@gmail.com',
        city: 'thane'
    }
    resp.render('profile',{user});
})
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})



// app.use(express.static(publicPath));
app.listen(3200);   