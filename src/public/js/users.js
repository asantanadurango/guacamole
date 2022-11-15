console.log('users');
const inpName = document.getElementById('name')

const inpSurname = document.getElementById('surname')

const inpIdentification = document.getElementById('identification')

const  inpEmail= document.getElementById('email')

const inpAddress = document.getElementById('address');

const inpPhone = document.getElementById('phone');

const btnSaveUser = document.getElementById('guardar');

const inputs = Array.from(document.querySelectorAll('input'))

const clearForm = () => inputs.forEach(inp => inp.value='')

btnSaveUser.addEventListener('click', (e) => {
    e.preventDefault()
 
const body = {
    name:inpName.value,
    surname:inpSurname.value,
    dentification:inpIdentification.value,
    email:inpEmail.value,
    address:inpAddress.value,
    phone:inpPhone.value,
  
}

    fetch('http://localhost:3000/api/users/register', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(console.log)
        .catch(err => console.log(err));
    clearForm()
    
    
})