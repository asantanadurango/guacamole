const formulario = document.getElementById("formularioClientes");
const inputs = document.querySelectorAll("#formularioClientes input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  indentification: /^.{7,12}$/, // 7 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,11}$/,
  address:/^(Autopista|Avenida|Avenida|Calle|Avenida Carrera|Avenida|Carrera|Calle|Carrera|Circunvalar|Diagonal|Kilometro|Transversal|AUTOP|AV|AC|AK|CL|KR|CCV|DG|KM|TV)(\s)?([a-zA-Z]{0,15}|[0-9]{1,3})(\s)?[a-zA-Z]?(\s)?(bis)?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?(#(\s)?[0-9]{1,2}(\s)?[a-zA-Z]?(\s)?(bis)?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?(-)?(\s)?[0-9]{1,3}(\s)?(Este|Norte|Occidente|Oeste|Sur)?)?((\s)?(Agrupación|Altillo|Apartamento|Apartamento Sótano|Barrio|Bloque|Bodega|Cabecera Municipal|Callejón|Camino|Carretera|Casa|Caserio|Célula|Centro|Centro Comercial|Centro Urbano|Circular|Condominio|Conjunto|Consultorio|Corregimiento|Deposito|Deposito |Sótano|Edificio|Entrada|Esquina|Etapa|Finca|Garaje|Garaje Sótano|Grada|Inferior|Inspección de Policia|Interior|Kilometro|Local|Local Mezzanine|Local Sótano|Lote|Manzana|Manzanita|Mejora|Mezzanine|Módulo|Municipio|Núcleo|Oficina|Oficina Sótano|Parcela|Parcelación|Pasaje|Penthouse|Piso|Porteria|Predio|Principal|Puente|Quebrada|Salon|Sector|Semisótano|Suite|Supermanzana|Terraza|Torre|Troncal|Unidad|Urbanización|Vereda|Via|Zona|AGN|AL|APTO|AS|BR|BL|BG|CM|CLJ|CN|CT|CA|CAS|CEL|CE|CECO|CEUR|CIR|CDM|CONJ|CS|CO|DP|DS|ED|EN|ESQ|ET|FCA|GJ|GS|GR|INF|IP|IN|KM|LC|LM|LS|LT|MZ|MZTA|MJ|MN|MD|MUN|NCO|OF|OS|PA|PCN|PSJ|PH|PI|PT|PD|PPAL|PN|QDA|SA|SEC|SS|SU|SMZ|TZ|TO|TRL|UN|URB|VDA|VIA|ZN)?(\s)?[1-9][0-9]{0,3})*$/i // 7 a 11 numeros.
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
    case "surname":
      if (expresiones.name.test(e.target.value)) {
        document.querySelector("#surname").classList.remove("incorrecto");
        document.querySelector("#lblSurname").classList.remove("visible")
      } else {
        document.querySelector("#lastSurname").classList.add("incorrecto");
        document.querySelector("#lblLastSurname").classList.add("visible")
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
      case "address":
      if (expresiones.address.test(e.target.value)) {
        document.querySelector("#address").classList.remove("incorrecto");
        document.querySelector("#lblAddress").classList.remove("visible")
      } else {
        document.querySelector("#address").classList.add("incorrecto");
        document.querySelector("#lblAddress").classList.add("visible")
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