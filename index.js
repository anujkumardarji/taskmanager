const express = require('express')
//controller
const todoController  = require('./todoController') 
const app = express()  
app.use(express.static(__dirname + '/public'));

//default things : EJS View Engine, Static MiddleWare, localhost:4000
app.set('view engine','ejs')

app.listen(4123)


//calling controller
todoController(app)
 