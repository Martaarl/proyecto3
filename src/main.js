import './style.css'
import { paintHeader } from "./components/header/header.js";
import { paintSection } from './components/section/section.js';
import printImages from './utils/printImages.js';
import { paintFooter } from './components/footer/footer.js';

let currentQuery = 'libros';

const lastQuery = localStorage.getItem('ultimaBusqueda');

document.addEventListener('DOMContentLoaded', ()=>{
    paintHeader();
    paintSection();
    printImages(currentQuery, 1 , 10);
    paintFooter();
});



