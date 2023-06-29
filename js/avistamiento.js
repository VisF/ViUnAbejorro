// Obtén referencias a los elementos del DOM
const inputFile = document.getElementById('inputFile');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Escucha el evento de cambio de archivo en el input file
inputFile.addEventListener('change', function(e) {
  // Obtiene el archivo seleccionado
  const file = e.target.files[0];

  // Crea un objeto de tipo FileReader
  const reader = new FileReader();

  // Escucha el evento de carga del archivo
  reader.onload = function(event) {
    // Crea una nueva imagen
    const img = new Image();

    // Establece la fuente de la imagen como el contenido del archivo
    img.src = event.target.result;

    // Cuando la imagen se haya cargado, dibújala en el canvas
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  // Lee el contenido del archivo como una URL de datos
  reader.readAsDataURL(file);
});


function submitForm(event) {
    event.preventDefault();
    let latitud = document.getElementById('latitud').value;
    let longitud = document.getElementById('longitud').value;
    let textArea = document.getElementById('textArea').value;
    let img = document.getElementById('inputFile').value;
    console.log("latitud: " + latitud + " longitud: " + longitud);
    console.log("texto: " + textArea);
    console.log("img name: " + img);

    let radios = document.getElementsByName("abejorros");
    
    // Recorre los radios y verifica cuál está seleccionado
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        // El radio seleccionado tiene el atributo "checked" igual a true
        let radioSeleccionado = radios[i].id;
        console.log("El radio seleccionado es: " + radioSeleccionado);
        break; // Rompe el bucle una vez que se ha encontrado el radio seleccionado
      }
    }

  }

