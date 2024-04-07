const BASE_URL = 'https://pixabay.com/api';
    const END_POINT = '/searchParams/';
    
    export async function fetchImages(query) {
        const params = new URLSearchParams({
            key: "9190280-87e8455cc30411d2efd850bc0",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        });
        const url = `${BASE_URL}${END_POINT}?${params}`;
      
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        }
      
        return response.json();
    }