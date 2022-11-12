const formulario = document.getElementById("formularioProductos");
const inputs = document.querySelectorAll("#formularioProductos input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  precio: /^.{7,12}$/, // 7 a 12 digitos.
  
  
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'nombre':
      if (expresiones.name.test(e.target.value)) {
        document.querySelector("#nombre").classList.remove("incorrecto");
        document.querySelector("#lblName").classList.remove("visible")
        
      } else {
        document.querySelector("#nombre").classList.add("incorrecto");
        document.querySelector("#lblName").classList.add("visible")
        
        
      }
      break;
    case "precio":
      if (expresiones.precio.test(e.target.value)) {
        document.querySelector("#precio").classList.remove("incorrecto");
        document.querySelector("#lblPrecio").classList.remove("visible")
      } else {
        document.querySelector("#precio").classList.add("incorrecto");
        document.querySelector("#lblPrecio").classList.add("visible")
      }
      break;
    case "cantidad":
      if (expresiones.precio.test(e.target.value)) {
        document.querySelector("#cantidad").classList.remove("incorrecto");
        
        document.querySelector("#lblCantidad").classList.remove("visible")
          
          
      } else {
        document.querySelector("#cantidad").classList.add("incorrecto");
        document.querySelector("#lblCantidad").classList.add("visible")
      }
      break;
    case "descripcion":
      if (expresiones.name.test(e.target.value)) {
        document.querySelector("#descripcion").classList.remove("incorrecto");
        
        document.querySelector("#lblDescripcion").classList.remove("visible")
      } else {
        document.querySelector("#descripcion").classList.add("incorrecto");
        document.querySelector("#lblDescripcion").classList.add("visible")
      }
      break;
   
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});