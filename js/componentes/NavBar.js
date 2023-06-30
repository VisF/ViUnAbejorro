"use strict"

let $mobileNav = $('.navigation');
let $mobileNavToggle = $('.mobile-nav-toggle > span');



function toggleMobileNav() {
    const mobileNav = document.querySelector('.navigation');
    const body = document.body;
  
    mobileNav.classList.toggle('open');
    body.classList.toggle('mobile-nav-open');
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const logoElement = document.getElementById('logo');
    logoElement.addEventListener('click', toggleMobileNav);
  });



/*function toggleMobileNav() {
    $mobileNav.toggleClass('open');
    $('body').toggleClass('mobile-nav-open');
}*/

$(function() {
    $mobileNavToggle.click(toggleMobileNav);
    });
$(document).on('click', function(e) {
    let $target = $(e.target);
    if (window.innerWidth >= 1024) {
        // Oculta la hamburguesa en la versión desktop
        if (mobileNavToggle) {
            mobileNavToggle.style.display = 'none';
        }

        // Asegúrate de que el menú esté visible en la versión desktop
        if (navigation) {
            navigation.style.left = '0';
        }
}
    // Verificar si se hizo clic fuera de la barra de navegación y del botón de menú
    if (!$target.closest('.navigation').length && !$target.closest('.mobile-nav-toggle').length) {
        $mobileNav.removeClass('open');
        $('body').removeClass('mobile-nav-open');
    }
});


window.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const correoFinal = urlParams.get('email');
    let botonA = document.getElementById("signup-button");
    let botonB = document.getElementById("login-button");
    let botonC = document.getElementById("close-sesion");
    let enlaceAvistamiento = document.getElementById("link-avistamiento");
    if (correoFinal === null) {
        botonA.style.display = "block";  
        botonB.style.display = "block";  
        botonC.style.display = "none"; 
        enlaceAvistamiento.style.display = "none";  
      } else {
        botonA.style.display = "none";   // Oculta el botón A
        botonB.style.display = "none";   // Oculta el botón B
        botonC.style.display = "block";  // Muestra el botón C
        enlaceAvistamiento.style.display = "block"; //Muestra el enlace
        const enlaces = document.getElementsByClassName('mi-enlace');
        for (let i = 0; i < enlaces.length; i++) {
      const href = enlaces[i].getAttribute('href');
      enlaces[i].setAttribute('href', `${href}/?email=${correoFinal}`);
    }
      }
    
  });

  window.onload = function() {
    let boton = document.getElementById("close-sesion");
    boton.onclick = function() {
        const enlaces = document.getElementsByClassName('mi-enlace');
        for (let i = 0; i < enlaces.length; i++) {
          const href = enlaces[i].getAttribute('href');
          enlaces[i].setAttribute('href', `${href}`);
        }
    };
  };
  