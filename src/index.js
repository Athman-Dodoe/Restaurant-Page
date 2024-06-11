import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
    
    loadHomePage();
    loadMenuPage();
});
