const express = require('express');
const route = express.Router();
let lista = require('../src/main');


route.get('/', async (req, res)=>{
    res.render('page/home',{resp:''});   
});

route.get('/exist', async (req, res)=>{
    await lista.Lista().then(list =>{
     res.render('page/clientFind',{lis: list, resp:'aaaaa'});
    });
 });

route.post('/register', (req, res)=>{
    lista.Ler(req.body)
    res.redirect('back')
});

route.get('/list', async (req, res)=>{
   await lista.Lista().then(list =>{
        res.render('page/registros', {lis: list,});
    });
});

route.get('/pesq', async (req, res)=>{
    let a;
    await lista.Lista().then(list =>{
        a = list;
    });
    res.send(a)
 });

module.exports = route;