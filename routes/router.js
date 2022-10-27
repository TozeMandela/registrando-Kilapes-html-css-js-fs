const express = require('express');
const route = express.Router();
let lista = require('../src/main');


route.get('/', async (req, res)=>{
   await lista.Lista().then(list =>{
    res.render('page/index', {lis: list, resp:req.flash('sucess')});
    
    req.flash('sucess','cadastrado com sucesso!');
   });
});

route.post('/register', (req, res)=>{
    lista.Ler(req.body)
    console.log(req.flash('sucess')[0])
    res.redirect('back', {resp:req.flash('sucess')})
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