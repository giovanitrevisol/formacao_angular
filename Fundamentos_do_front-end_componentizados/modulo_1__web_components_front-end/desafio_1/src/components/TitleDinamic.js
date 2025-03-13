class TitleDinamic extends HTMLElement{
    
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode: 'open'});

        //base do componente
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("title");

        //estilizar componente
        const style = document.createElement('style');
        style.textContent = `
            h1{
                color: red;
                font-size: 24px;
            }
        `;

        //enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);


    }
}

customElements.define('title-dinamic', TitleDinamic);