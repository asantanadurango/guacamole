//import {verificar} from "productValidation.js";
/*console.log('products');
const inpName = document.getElementById('name')

const inpPrice_1 = document.getElementById('price_1')
const inpWeight_1 = document.getElementById('weight_1')


const inpPrice_2 = document.getElementById('price_2')
const inpWeight_2 = document.getElementById('weight_2')


const inpDescription = document.getElementById('description');
const btnSave = document.getElementById('save');

const inputsList = Array.from(document.querySelectorAll('input'))

const clearForm = () => inputsList.forEach(inp => inp.value='')

btnSave.addEventListener('click', (e) => {
    console.log('e');
    
    e.preventDefault()

    const generateRef = (name, price) => {
        const splitedName = name.split(' ');
        const initalToUppercase = splitedName.map(word => word.at(0).toUpperCase()).join('');
        return `${initalToUppercase}-${price}`
    };
 

    console.log(generateRef(inpName.value, inpPrice_1.value));
const body = {
    name:inpName.value,
    description: inpDescription.value,
    presentations: [
        {
            price:inpPrice_1.value,
            weight:inpWeight_1.value,    
            ref:generateRef(inpName.value, inpPrice_1.value)
        },
        {
            price:inpPrice_2.value,
            weight:inpWeight_2.value,
            ref:generateRef(inpName.value, inpPrice_2.value)
        }
    ]
}

//if(verificar){
    fetch('http://localhost:3000/api/products/register', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(()=>alert('Producto registrado con exito'))
        .catch(err => console.log(err))
    clearForm()
//}else{()=>alert('Algo salio mal')}
    
})*/