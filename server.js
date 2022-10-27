require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


const helmet = require('helmet');
const csrf = require('csurf');
const flash = require('connect-flash');
const session = require('express-session');
const {middleGlobal, csrfTokenerr,mcsrfToken} = require('./routes/middleware/middleware');
let index = require('./routes/router');

/* mongoose.connect(process.env.CONNECTSTRING).then(()=>{
    console.log('conectado com a base de dados')
    app.emit('pronto');
}).catch(e=>console.log('erro ao connectar com servidor')); */



app.use(helmet());

app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use( session ( { 
    secret : 'keyboard cat' , 
    resave : false , 
    saveUninitialized : true , 
    cookie : {  secure : true  } 
  } ) );
 
app.use(csrf());
app.use(flash());

app.use(mcsrfToken)
app.use(middleGlobal);
app.use(csrfTokenerr);
app.use('/',index);

/* app.on('pronto',()=>{app.listen(3000, ()=>{
    console.log('servidor ligado...')
})}) */
app.listen(3000, ()=>{
    console.log('servidor ligado...')
})

