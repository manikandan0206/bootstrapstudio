const express =require('express');
const app = express();

const path = require('path');

//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


app.get('/', function(req,res){
    res.render('home');
});


app.get('/signup',function (req,res) {
   res.render('signup'); 
});


app.get('/signin',function (req,res) {
   res.render('signin'); 
});

app.get('/table',function(req,res){
  res.render('table');  
});


//this code for port - for that we need to install only the express
app.listen(3000,function(){
    console.log('server started on port 3000');
});