const fs = require('fs').promises;
const path = require('path');
const caminho = path.resolve(__dirname, '..', 'public', 'data', 'kilapes.json');


exports.Lista = async  ()=>{
    let list = new Array();
    await fs.readFile(caminho, 'utf8').then(d=>{
        if(d){
            JSON.parse(d).forEach(element => {
                list.push(element);
            });
        }
    });
     return list;
}

exports.Ler = async  ( data )=>{
    let list = new Array();
    try{
        await fs.readFile(caminho, 'utf8').then(d=>{
            if(d){
                JSON.parse(d).forEach(element => {
                    list.push(element);
                });
            }
        });
    }catch(e){
        console.log('arquivo ainda ñ existe')
    }
    data.data = new Date(Date.now()).toLocaleDateString('pt-pt');

    if(list.length>0) list.push(data);
    if(list.length==0) list.push(data);

    list = JSON.stringify(list, '', 2);
    fs.writeFile(caminho, list, {flag: 'w'});
}

