import 'core-js/stable';
import 'regenerator-runtime/runtime';

let itemExist = document.querySelector('#exist');
let fields = document.querySelectorAll('input, textarea, select');

itemExist.addEventListener('change', async ()=>{
    let index = parseInt(itemExist.options[itemExist.selectedIndex].dataset.js);
    let el = await getEl(index);

    fields.forEach(field => {
    
        field.disabled=true;
        field.value = el[field.name];
        if(field.name == 'valor') field.disabled = false;
        if(field.name == 'exist') field.value = el.nameCliente;
        addPlaceholder(field, 'valor', el);
        addPlaceholder(field, 'descrition', el);
        addPlaceholder(field, "atendente", el);

    });
    
})

function addPlaceholder(campName, Comparador, el){
    if(campName.name == Comparador) {
        campName.disabled = false;
        campName.placeholder = `${el[campName.name]} + `;
        campName.value = '';
    }
}
async function getEl(index){
    let el;
    await fetch('/pesq').then(d=>d.json()).then(da=>{
        el = da;
    });
    console.log(el[index])
    return el[index];
}

/* let height = window.innerHeight;
let footer = document.querySelector('footer');

footer.style.marginTop = `${height/34}px`; */