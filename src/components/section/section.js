//CtqFt8IM9yQBvEU023Pb6fFyQZSdEJbYIvtjHb3e-1U
import '../../utils/printImages.js'
import './section.css';

export const paintSection = () => {
    const imagesContainer = document.querySelector('section');

    const imagesDiv = document.createElement('div');
    imagesDiv.classList.add('bookImages');

    const imagesUl = document.createElement('ul');
    imagesUl.className='images';

    imagesDiv.appendChild(imagesUl);

    imagesContainer.appendChild(imagesDiv);

    return imagesContainer

};

