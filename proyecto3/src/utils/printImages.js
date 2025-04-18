
import {Card} from '../components/card/card'
import { fetchApi } from "./fetchApi";

export default  async function printImages(query) {
    const imagesContainer = document.querySelector('.images');

    if (imagesContainer) imagesContainer.innerHTML = '';

    try {
        const result = await fetchApi(query);

        result.forEach(image => {
            const newCard = Card(image);

            imagesContainer.appendChild(newCard);
        });
    } catch (error) {
        console.log(error)
    }

}