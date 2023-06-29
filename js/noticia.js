const imagen= document.getElementById("fondo");
const titulo = document.getElementById("titulo");
const contenido= document.getElementById("contenido");

imagen.style.width="100%"
let encontrada= false

window.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('n');
    fetch('./noticias.json')
    .then((response) => response.json())
    .then(data => {
        data.forEach(noticia => {
            if(noticia.id==id){
                imagen.src=noticia.img
                imagen.alt=noticia.alt
                titulo.innerHTML=noticia.titulo
                contenido.innerHTML= noticia.contenido
                encontrada=true
                cambiarMain();
            }
        });
        if(encontrada==false){
            renderError()
        }
    }).catch(function () {
        renderError();
    })
});

function cambiarMain(){
    const main= document.getElementById("noticia")
    main.classList.add("contenido-noticia")
}
function renderError(){
    document.getElementById("noticia").innerHTML= '<h1>No se encontró la noticia, <span><a href="./noticias.html">volver a las noticias</a></span></h1>'
}