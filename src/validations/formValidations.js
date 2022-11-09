const formulario = document.getElementById('formularioClientes');
const inputs = document.querySelectorAll('#formularioClientes input');


const expresiones = {
	
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	indentification: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
	switch (e.target.name) {
	  case 'name':
		if(expresiones.name.test(e.target.value)) {
		  document.querySelector('#name').classList.remove('incorrecto');
		} else {
		  document.querySelector('#name').classList.add('incorrecto');
		}
		break;
	  case 'lastName':
		if (expresiones.name.test(e.target.value)) {
		  document.querySelector('#lastName').classList.remove('incorrecto')
		} else {
		  document.querySelector('#lastName').classList.add('incorrecto');
		}
		break;
	  case 'identification':
		if (expresiones.numero.test(e.target.value)) {
		  document.querySelector('#identification').classList.remove('incorrecto')
		} else {
		  document.querySelector('#identification').classList.add('incorrecto');
		}
		break;
	  case 'email':
		if (expresiones.nota.test(e.target.value)) {
		  document.querySelector('#email').classList.remove('incorrecto')
		} else {
		  document.querySelector('#email').classList.add('incorrecto');
		}
		break;
	  case 'phone':
		if (expresiones.nota.test(e.target.value)) {
		  document.querySelector('#phone').classList.remove('incorrecto')
		} else {
		  document.querySelector('#phone').classList.add('incorrecto');
		}
		break;
	}
  }
  
  inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
  })
  
  formulario.addEventListener('submit', (e) => {
	e.preventDefault();
  
	let name = document.querySelector('#name');
	let lastName = document.querySelector('#lastName');
	let identification = document.querySelector('#identification');
	let email = document.querySelector('#email');
	let phone = document.querySelector('#phone');
	
	
  });