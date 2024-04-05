export function fetchImages(query) {
    const searchParams = new URLSearchParams({
        key: "9190280-87e8455cc30411d2efd850bc0",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url).then(response => {
        if (!response.ok) {

            throw new Error(response.status)
        }

        return response.json();
    });
}