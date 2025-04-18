import './style.css'
import { paintHeader } from "./components/header/header.js";
import { paintSection } from './components/section/section.js';
import printImages from './utils/printImages.js';

document.addEventListener('DOMContentLoaded', ()=>{
    paintHeader();
    paintSection();
    printImages();
});

/*const url = 'https://api.unsplash.com/search/photos';*/