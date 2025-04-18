
import printImages from '../../utils/printImages';
import './header.css';

 export const paintHeader = () => {

    const header = document.querySelector('header');

    const logo = document.createElement('img');
    logo.src='/assets/logo.png';
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
         li.appendChild(a);
         ul.appendChild(li);
      });


const form = document.createElement('form');
form.id = 'formulary';

const label = document.createElement('label');
const input = document.createElement('input');
input.placeholder=' Busca aquí';

const button = document.createElement('button');
button.className = 'buttonLook';
button.textContent = '🔎';
button.type = 'submit';

const menu = document.createElement('div');
menu.classList.add('menu');

const alertIcon = document.createElement('img');
alertIcon.src = '/assets/alert.png';
alertIcon.alt = 'Activa las alertas';

const messageIcon = document.createElement('img');
messageIcon.src = '/assets/message.png';
messageIcon.alt = 'Mensajes';

menu.append(alertIcon, messageIcon);


form.append(label, input, button);

nav.append(ul, form);

header.append(logo, nav, menu);

form.addEventListener('keydown', async(e) =>{
  if (e.key==='Enter') {
    e.preventDefault();
     await printImages(input.value);
     input.value = '';
  }
});

button.addEventListener('click', () => {
  printImages(input.value);
  input.value = '';
})

return 
} ;


