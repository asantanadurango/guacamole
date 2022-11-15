const formulario = document.getElementById("formularioProductos");
const inputs = document.querySelectorAll("#formularioProductos input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  precio: /^\d{1,8}$/, // 0 a 7 digitos.
  
  
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
      case "description":
      if (expresiones.name.test(e.target.value)) {
        document.querySelector("#description").classList.remove("incorrecto");
        
        document.querySelector("#lblDescription").classList.remove("visible")
      } else {
        document.querySelector("#description").classList.add("incorrecto");
        document.querySelector("#lblDescription").classList.add("visible")
      }
      break;
    case "price_1":
      if (expresiones.precio.test(e.target.value)) {
        document.querySelector("#price_1").classList.remove("incorrecto");
        document.querySelector("#lblPrice_1").classList.remove("visible")
      } else {
        document.querySelector("#price_1").classList.add("incorrecto");
        document.querySelector("#lblPrice_1").classList.add("visible")
      }
      break;
    case "weight_1":
      if (expresiones.precio.test(e.target.value)) {
        document.querySelector("#weight_1").classList.remove("incorrecto");
        
        document.querySelector("#lblWeight_1").classList.remove("visible")
          
          
      } else {
        document.querySelector("#weight_1").classList.add("incorrecto");
        document.querySelector("#lblWeight_1").classList.add("visible")
      }
      break;
      case "price_2":
        if (expresiones.precio.test(e.target.value)) {
          document.querySelector("#price_2").classList.remove("incorrecto");
          document.querySelector("#lblPrice_2").classList.remove("visible")
        } else {
          document.querySelector("#price_2").classList.add("incorrecto");
          document.querySelector("#lblPrice_2").classList.add("visible")
        }
        break;
      case "weight_2":
        if (expresiones.precio.test(e.target.value)) {
          document.querySelector("#weight_2").classList.remove("incorrecto");

          document.querySelector("#lblWeight_2").classList.remove("visible")
            
            
        } else {
          document.querySelector("#weight_2").classList.add("incorrecto");
          document.querySelector("#lblWeight_2").classList.add("visible")
        }
        break;
   
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});