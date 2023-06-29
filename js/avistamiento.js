const inputFile = document.getElementById('inputFile');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

inputFile.addEventListener('change', function(e) {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();

    img.src = event.target.result;

    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

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
    
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        let radioSeleccionado = radios[i].id;
        console.log("El radio seleccionado es: " + radioSeleccionado);
        break; 
      }
    }

  }

