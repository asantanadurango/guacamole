//const formulario = document.getElementById("formularioProductos");
const inputs = document.querySelectorAll("#formularioProductos input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  precio: /^\d{1,8}$/, // 0 a 7 digitos.
};
const campos={
  name:false,
  description:false,
  price_1:false,
  weight_1:false,
  price_2:false,
  weight_2:false,
  
}


const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      if (expresiones.name.test(e.target.value)) {
        document
          .querySelector("#name")
          .classList.remove("border", "border-danger");
        document
          .querySelector("#lblName")
          .classList.add("text-danger", "invisible");
          campos['name']=true;
      } else {
        document
          .querySelector("#name")
          .classList.add("border", "border-danger");
        document
          .querySelector("#lblName")
          .classList.remove("invisible");
          document
          .querySelector("#lblName")
          .classList.add("text-danger", "visible");
          campos['name']=false;
          
      }
      break;
    case "description":
      if (expresiones.name.test(e.target.value)) {
        document
          .querySelector("#description")
          .classList.remove("border", "border-danger");

        document
          .querySelector("#lblDescription")
          .classList.add("text-danger", "invisible");
          campos['description']=true;
      } else {
        document
          .querySelector("#description")
          .classList.add("border", "border-danger");
          document
          .querySelector("#lblDescription")
          .classList.remove("invisible");
        document
          .querySelector("#lblDescription")
          .classList.add("text-danger", "visible");
          campos['description']=false;
      }
      break;
    case "price_1":
      if (expresiones.precio.test(e.target.value)) {
        document
          .querySelector("#price_1")
          .classList.remove("border", "border-danger");
        document
          .querySelector("#lblPrice_1")
          .classList.add("text-danger", "invisible");
          campos['price_1']=true;
      } else {
        document
          .querySelector("#price_1")
          .classList.add("border", "border-danger");
          document
          .querySelector("#lblPrice_1")
          .classList.remove("invisible");

        document
          .querySelector("#lblPrice_1")
          .classList.add("text-danger", "visible");
          campos['price_1']=false;
      }
      break;
    case "weight_1":
      if (expresiones.precio.test(e.target.value)) {
          document
          .querySelector("#weight_1")
          .classList.remove("border", "border-danger");

        document
          .querySelector("#lblWeight_1")
          .classList.add("text-danger", "invisible");
          campos['weight_1']=true;
      } else {
        document
          .querySelector("#weight_1")
          .classList.add("border", "border-danger");
          document
          .querySelector("#lblWeight_1")
          .classList.remove("invisible");
        document
          .querySelector("#lblWeight_1")
          .classList.add("text-danger", "visible");
          campos['weight_1']=false;
      }
      break;
    case "price_2":
      if (expresiones.precio.test(e.target.value)) {
        document
          .querySelector("#price_2")
          .classList.remove("border", "border-danger");
        document
          .querySelector("#lblPrice_2")
          .classList.add("text-danger", "invisible");
          campos['price_2']=true;
      } else {
        document
          .querySelector("#price_2")
          .classList.add("border", "border-danger");
          document
          .querySelector("#lblPrice_2")
          .classList.remove("invisible");
        document
          .querySelector("#lblPrice_2")
          .classList.add("text-danger", "visible");
          campos['price_2']=false;
      }
      break;
    case "weight_2":
      if (expresiones.precio.test(e.target.value)) {
        document
          .querySelector("#weight_2")
          .classList.remove("border", "border-danger");

        document
          .querySelector("#lblWeight_2")
          .classList.add("text-danger", "invisible");
          campos['weight_2']=true;
      } else {
        document
          .querySelector("#weight_2")
          .classList.add("border", "border-danger");
          document
          .querySelector("#lblWeight_2")
          .classList.remove("invisible");
        document
          .querySelector("#lblWeight_2")
          .classList.add("text-danger", "visible");
          campos['weight_2']=false;
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

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
    
    const validation = campos.name && campos.description && campos.price_1 && campos.price_2 && campos.weight_1 && campos.weight_2
    console.log(validation)
    if(validation){
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

    fetch('http://localhost:3000/api/products/register', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(()=>alert('Producto registrado con exito'))
        .catch(err => console.log(err))
    clearForm()
  }else{
    alert("completa todos los campos correctamente")
  }
})





