const contenedor= document.getElementById("contenedor-noticias"),
buscador= document.getElementById("buscador-noticias");


function colorSeccion(seccion){
    switch (seccion.toLowerCase()) {
        case "prensa": return "color: #FF6962";
        case "divulgacion": return "color: #B19CD8";
        case "informativo mensual": return "color: #40a040";
    }
}

fetch('./noticias.json')
.then((response) => response.json())
.then(data => {
    noticias=data;
    data.forEach(noticia => {
        const card_noticia = `<a class="sin" href="./noticia.html?n=${noticia.id}">
        <div id=${noticia.id} class="card">
            <img src="${noticia.img}" alt="${noticia.alt}" style="width:100%">
            <div>
                <h3><span style="${colorSeccion(noticia.seccion)};">${noticia.seccion}</span>/${noticia.titulo}</h3>
                <p>${noticia.bajada}</p>
            </div>
        </div>
        </a>`;
        contenedor.innerHTML+=card_noticia;
    });
}).catch(function () {
    // Acciones en caso de posible error.
}).finally(function (){
    // Se ejecuta en caso de éxito o de error, puede servir por ej. para esconder un loader.
});

buscador.addEventListener('input', () => {

    const filtro = buscador.value.toLowerCase()
    let noticias_filtradas= new Set()

    noticias.forEach(noticia => {
        console.log(noticia)
        const titulo = noticia.titulo.toLowerCase();
        if (titulo.includes(filtro)) {
            noticias_filtradas.add(noticia.id)
        }else{
            noticias_filtradas.delete(noticia.id)
        }
    })
    if(noticias_filtradas.size== 0){


    }
    noticias.forEach(noticia =>{
        const elemento_noticia= document.getElementById(`${noticia.id}`);

        if(noticias_filtradas.has(noticia.id)){
            elemento_noticia.style.display='block'
        }else{
            elemento_noticia.style.display='none'
        }
    })
    
})