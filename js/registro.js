// Obtener los usuarios almacenados en localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

let alerta = document.getElementById('alertaSesion');

function submitForm(event) {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let passwordCheck = document.getElementById('passwordCheck').value;
  let checkTerminos = document.getElementById('checkTerminos').checked;

  if (email !== '' && password !== '' && passwordCheck !== '') {
    if (validarEmail(email) === true) {
      let contieneMayuscula = /[A-Z]/.test(password);
      let contieneMinuscula = /[a-z]/.test(password);
      let contieneNumero = /[0-9]/.test(password);

      if (!(password.length > 7 && contieneMayuscula && contieneMinuscula && contieneNumero)) {
        alerta.innerHTML = '<p id="textoAlerta">La contraseña debe contener minimo 8 caracteres, con al menos una minúscula, una mayúscula y un número.</p>';
      } else {
        if (passwordCheck === password && checkTerminos === true) {
          let usuario = {
            email: email,
            password: password
          };
          users.push(usuario);
          alerta.innerHTML = '';

          // Guardar usuarios en localStorage
          localStorage.setItem('users', JSON.stringify(users));
          
          // Limpiar los campos de entrada
          document.getElementById('email').value = '';
          document.getElementById('password').value = '';
          document.getElementById('passwordCheck').value = '';
          document.getElementById('checkTerminos').checked = false;
          window.location.href = 'iniciar-sesion.html';

        } 
        else if (passwordCheck !== password && checkTerminos === true) {
          alerta.innerHTML = '<p id="textoAlerta">Las contraseñas no coinciden.</p>';
          document.getElementById('password').value = '';
          document.getElementById('passwordCheck').value = '';
        } 
        else if (passwordCheck === password && checkTerminos !== true) {
          alerta.innerHTML = '<p id="textoAlerta">Aceptar términos y condiciones.</p>';
        }
      }
    } else {
      alerta.innerHTML = '<p id="textoAlerta">Ingrese un correo electrónico válido.</p>';
    }
  } else {
    alerta.innerHTML = '<p id="textoAlerta">Complete todos los campos.</p>';
  }
}

function validarEmail(email) {
  var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (expresionRegular.test(email)) {
    return true;
  } else {
    return false;
  }
}
