
import printImages from '../../utils/printImages';
import './header.css';

let currentQuery = 'libros';

 export const paintHeader = () => {

    const header = document.querySelector('header');

    const logo = document.createElement('img');
    logo.src='/assets/image.png';
    logo.alt = 'Logo de la página';

    const nav = document.createElement('nav');

    const ul =  document.createElement('ul');
    ul.classList.add('navAnchor');
    
    const anchors = ['Inicio', 'Explorar', 'Crear'];
    anchors.forEach(anchor=>{
        const li = document.createElement('li');
        li.classList.add("check");
        
        const a = document.createElement('a');
         a.href='#';
         a.textContent = anchor;

         if (anchor === 'Inicio'){
          a.addEventListener('click', async (e) =>{
            e.preventDefault();
            const firstLook = localStorage.getItem('primeraBusqueda');
            
            if (firstLook){
              input.value = firstLook;
              currentQuery = firstLook;
               await printImages(firstLook);
          }
          
          });
        }

         li.appendChild(a);
         ul.appendChild(li);
      });

      let currentQuery = 'libros';

const form = document.createElement('form');
form.id = 'formulary';

const label = document.createElement('label');
const input = document.createElement('input');
input.placeholder='🔎 Busca aquí';

const menu = document.createElement('div');
menu.className='menu';

const alertIcon = document.createElement('img');
alertIcon.src = '/assets/alert.png';
alertIcon.alt = 'Activa las alertas';

const messageIcon = document.createElement('img');
messageIcon.src = '/assets/message.png';
messageIcon.alt = 'Mensajes';

menu.append(alertIcon, messageIcon);

form.append(label, input );

nav.append(ul, form);

header.append(logo, nav, menu);

form.addEventListener('keydown', async(e) =>{
  if (e.key==='Enter') {
    e.preventDefault();
     currentQuery = input.value;

     if (!localStorage.getItem('primeraBusqueda')) {
      localStorage.setItem('primeraBusqueda', input.value)
     }
     await printImages(input.value);
     input.value = '';
  } 
});



return 
} ;


