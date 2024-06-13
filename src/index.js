import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadContactPage } from "./contactpage.js";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();

    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');

    const clearContent = () => {
        const Content = document.getElementById('content');
        Content.innerHTML = '';
    }

    homeButton.addEventListener('click', () => {
        clearContent();
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenuPage();
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        loadContactPage();
    });
});

