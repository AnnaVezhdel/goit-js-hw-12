export function fetchImages(query) {
    const URL = "https://pixabay.com/api";
    const API_KEY = "45306950-544d7ee3c7cf7db24fb2a5eae";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    return fetch(`${URL}/?${params.toString()}`).then((response) => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
        return null;
    });
}
