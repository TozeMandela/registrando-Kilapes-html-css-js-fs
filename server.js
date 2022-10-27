require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const flash = require('connect-flash');
const session = require('express-session');
const global = require('./routes/middleware/middleware');
let index = require('./routes/router');
const { Session } = require('inspector');
/* mongoose.connect(process.env.CONNECTSTRING).then(()=>{
    console.log('conectado com a base de dados')
    app.emit('pronto');
}).catch(e=>console.log('erro ao connectar com servidor')); */




app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use( session ( { 
    secret : 'keyboard cat' , 
    resave : false , 
    saveUninitialized : true , 
    cookie : {  secure : true  } 
  } ) );
  
app.use(flash());

app.use(global.Global);
app.use('/',index);

/* app.on('pronto',()=>{app.listen(3000, ()=>{
    console.log('servidor ligado...')
})}) */
app.listen(3000, ()=>{
    console.log('servidor ligado...')
})

