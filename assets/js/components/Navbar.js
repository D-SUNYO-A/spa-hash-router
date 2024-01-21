import { eventBus } from "../services/EventBus.js";


export default class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        this.render();
    }

    render() {
        this.root.innerHTML =  `
            <link rel="stylesheet" href="./assets/css/index.css">
            <link rel="stylesheet" href="./assets/css/navbar.css">
            
            <nav id="main-nav">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        `
    }
}   
window.customElements.define('app-navbar', NavbarComponent)