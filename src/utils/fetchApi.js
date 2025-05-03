
const url = 'https://api.unsplash.com/search/photos';

const apiKey = 'CtqFt8IM9yQBvEU023Pb6fFyQZSdEJbYIvtjHb3e-1U';

export async function fetchApi(query = 'libros', page= 1, perPage = 10) {
    try {
        const response = await fetch(`${url}/?query=${query}&page=${page}&per_page=${perPage}&client_id=${apiKey}`);
        console.log(response);
        
        const res = await response.json();
        console.log(res);

        return  {results: res.results,
            total_pages:res.total_pages,
        }

    } catch (error) {
        console.log('Error getting images', error);
    
        return {
            results: [],
            total_pages : 0};
    } 

    }
