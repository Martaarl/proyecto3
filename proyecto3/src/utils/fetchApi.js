
const url = 'https://api.unsplash.com/search/photos';

const apiKey = 'CtqFt8IM9yQBvEU023Pb6fFyQZSdEJbYIvtjHb3e-1U';

export async function fetchApi(query = 'libros') {
    try {
        const response = await fetch(`${url}/?query=${query}&per_page=20&client_id=${apiKey}`);
        console.log(response);
        
        const res = await response.json();
        console.log(res);

        return res.results;

    } catch (error) {
        console.log('Error getting images', error);
    }
}