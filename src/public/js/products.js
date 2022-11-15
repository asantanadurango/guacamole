console.log('products');
const inpName = document.getElementById('name')

const inpPrice_1 = document.getElementById('price_1')
const inpWeight_1 = document.getElementById('weight_1')


const inpPrice_2 = document.getElementById('price_2')
const inpWeight_2 = document.getElementById('weight_2')


const inpDescription = document.getElementById('description');
const btnSave = document.getElementById('save');

const inputs = Array.from(document.querySelectorAll('input'))

const clearForm = () => inputs.forEach(inp => inp.value='')

btnSave.addEventListener('click', (e) => {
    e.preventDefault()

function firstTwo(name){
    const arrayName = name.split(' ')
    const arregloPrimeras = arrayName.map((e)=>e.)
}
 
const body = {
    name:inpName.value,
    description: inpDescription.value,
    presentations: [
        {
            price:inpPrice_1.value,    
            weight:inpWeight_1.value,    
            ref:inpRef_1.value,    
        },
        {
            price:inpPrice_2.value,
            weight:inpWeight_2.value,
            ref:inpRef_2.value,
        }
    ]
}

    fetch('http://localhost:3000/api/products/register', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(console.log)
        .catch(err => console.log(err));
    clearForm()
    
    
})