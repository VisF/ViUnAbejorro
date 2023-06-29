

class Noticia extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.template = document.createElement('template');

        const content= this.render();
        
        
        this.shadowRoot.appendChild(content);
    }
    render(){
        const img = this.getAttribute('img');
        const alt = this.getAttribute('alt');
        console.log(this)
        const seccion = this.uppercase(this.getAttribute('seccion'));
        const titulo = this.uppercase(this.getAttribute('titulo'));
        const bajada = this.uppercase(this.getAttribute('bajada'));

        const template = document.createElement('template');
        template.innerHTML = `
            <style>

            </style>
            <div class="card">
                <img src="${img}" alt="${alt}" style="width:100%">
                <div>
                    <h4><span style="${this.colorSeccion(seccion)};">${seccion}</span>/${titulo}</h4>
                    <p>${bajada}</p>
                </div>
            </div>
        `;

        return template.content;
    }
    colorSeccion(seccion){
        switch (seccion) {
            case "Prensa": return "color: red";
            case "Divulgacion": return "color: violet";
            case "Informativo mensual": return "color: green";
        }
    }
    uppercase(str_param){

        return str_param.charAt(0).toUpperCase() + str_param.slice(1)
    }
}

window.customElements.define('card-noticia', Noticia);