import './style.css'
import { paintHeader } from "./components/header/header.js";
import { paintSection } from './components/section/section.js';
import printImages from './utils/printImages.js';
import { paintFooter } from './components/footer/footer.js';

document.addEventListener('DOMContentLoaded', ()=>{
    paintHeader();
    paintSection();
    printImages();
    paintFooter();
});

/*const url = 'https://api.unsplash.com/search/photos';*/