 
import './components/header.css'

 export const paintHeader = () => {

    const header = document.querySelector('header');

    const logo = document.createElement('img');
    logo.src='./public/assets/librologo.png';
    logo.alt = 'Logo de la página';

    const nav = document.createElement('nav');
    console.log(nav);

    const ul =  document.createElement('ul');
    ul.classList.add('navAnchor');

    const anchors = ['Inicio', 'Explorar', 'Crear'];
    anchors.forEach(anchor=>{
        const li = document.createElement('li');
        const a = document.createElement('a');
         a.href='#';
         a.textContent = anchor;
    li.appendChild(a);
    ul.appendChild(li);
})

anchors.addEventListener('click', printNav);

const form = document.createElement('form');
form.id = 'formulary';

const label = document.createElement('label');
const input = document.createElement('input');
input.placeholder='Busca aquí';
input.type= 'text';

form.append(label, input);

nav.append(ul, form);

header.append(logo, nav);

const printNav = () => {
   anchors.style.color = 'red';
}
return
} ;


