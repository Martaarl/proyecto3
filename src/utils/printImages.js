
import {Card} from '../components/card/card'
import { fetchApi } from "./fetchApi";

export default  async function printImages(query, page = 1, perPage=10) {
    
    const imagesContainer = document.querySelector('.images');

    if (imagesContainer) imagesContainer.innerHTML = '';

    try {
        const result = await fetchApi(query, page, perPage);

        const response =result.results;
        
        const total_pages= result.total_pages;

        if(response.length === 0){
           
            const suggest = document.createElement('p');
            suggest.className = 'suggestMessage';
            suggest.textContent = `No encontramos resultados para "${query}". Prueba a buscar otra palabra como 'perro'`;
            imagesContainer.appendChild(suggest);

            const imagesSuggested = await fetchApi('perro', page = 1, perPage=10)
            imagesSuggested.results.forEach(image=>{
                const newCard = Card(image);
                imagesContainer.appendChild(newCard);
            });
      
            displayPagination(page, imagesSuggested.total_pages);
            return;
            }

        response.forEach(image => {
            const newCard = Card(image);
            imagesContainer.appendChild(newCard);
        });

        displayPagination(page, total_pages);

       
    } catch (error) {
        console.log(error);
    }
}

function displayPagination(currentPage, totalPages){
    const pagination = document.querySelector('.pagination');

    if (!pagination) return;
    pagination.innerHTML = '';

    const preButton = document.createElement ('button');
    preButton.textContent = 'Anterior';
    preButton.disabled = currentPage === 1;
    preButton.addEventListener('click', () => pageChange(currentPage-1));
    pagination.appendChild(preButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () =>{
        pageChange(currentPage+1)
    })
    pagination.appendChild(nextButton);
};


let currentQuery = 'libros';

function pageChange(newPage){
    const query = document.querySelector('input').value;
    printImages(query, newPage, 10);
    return 
}
