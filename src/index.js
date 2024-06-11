import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadContactPage } from "./contactpage.js";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
    
    loadHomePage();
    loadMenuPage();
    loadContactPage();
});

