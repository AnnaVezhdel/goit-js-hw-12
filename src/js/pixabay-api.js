import axios from "axios";
export async function fetchImages(query, page = 1) {
    const URL = "https://pixabay.com/api";
    const API_KEY = "45306950-544d7ee3c7cf7db24fb2a5eae";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
        page: page
    });

    try {
        const response = await fetch(`${URL}/?${params.toString()}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
    } catch(error) {
        console.error('Error:', error);
        return null;
    };
}
