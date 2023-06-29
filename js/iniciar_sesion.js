
let usersData = localStorage.getItem('users');

let users = JSON.parse(usersData);

let alerta = document.getElementById('alertaSesion');

function submitForm(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email !== '' && password !== ''){
        if (validarEmail(email) === true) {
            for (let i = 0; i < users.length; i++) {
                const usuario = users[i];
                if (usuario.email === email && usuario.password === password) {
                    window.location.href = 'index.html?email=' + email;
                    return;
                }
            }
            alerta.innerHTML ='<p id="textoAlerta">Credenciales inválidas</p>';
        }
        else {
            alerta.innerHTML = '<p id="textoAlerta">Ingrese un correo electrónico válido.</p>';
        }
    }
    else{
        alerta.innerHTML = '<p id="textoAlerta">Complete todos los campos.</p>'
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