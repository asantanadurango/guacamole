const formulario = document.getElementById("formularioClientes");
const inputs = document.querySelectorAll("#formularioClientes input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  indentification: /^.{7,12}$/, // 7 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,11}$/, // 7 a 11 numeros.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'name':
      if (expresiones.name.test(e.target.value)) {
        document.querySelector("#name").classList.remove("incorrecto");
        document.querySelector("#lblName").classList.remove("visible")
        
      } else {
        document.querySelector("#name").classList.add("incorrecto");
        document.querySelector("#lblName").classList.add("visible")
        
        
      }
      break;
    case "lastName":
      if (expresiones.name.test(e.target.value)) {
        document.querySelector("#lastName").classList.remove("incorrecto");
        document.querySelector("#lblLastName").classList.remove("visible")
      } else {
        document.querySelector("#lastName").classList.add("incorrecto");
        document.querySelector("#lblLastName").classList.add("visible")
      }
      break;
    case "identification":
      if (expresiones.indentification.test(e.target.value)) {
        document.querySelector("#identification").classList.remove("incorrecto");
        
        document.querySelector("#lblIdentification").classList.remove("visible")
          
          
      } else {
        document.querySelector("#identification").classList.add("incorrecto");
        document.querySelector("#lblIdentification").classList.add("visible")
      }
      break;
    case "email":
      if (expresiones.email.test(e.target.value)) {
        document.querySelector("#email").classList.remove("incorrecto");
        
        document.querySelector("#lblEmail").classList.remove("visible")
      } else {
        document.querySelector("#email").classList.add("incorrecto");
        document.querySelector("#lblEmail").classList.add("visible")
      }
      break;
    case "phone":
      if (expresiones.phone.test(e.target.value)) {
        document.querySelector("#phone").classList.remove("incorrecto");
        
        document.querySelector("#lblPhone").classList.remove("visible")
      } else {
        document.querySelector("#phone").classList.add("incorrecto");
        document.querySelector("#lblPhone").classList.add("visible")
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#name");
  let lastName = document.querySelector("#lastName");
  let identification = document.querySelector("#identification");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");

  const bodyResponse = {
    data: "Holaaaaaa",
  };

  fetch("http://localhost:3000/users/create", {
    method: "POST",
    body: JSON.stringify(bodyResponse),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.log);
});
