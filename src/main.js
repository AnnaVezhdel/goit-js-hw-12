import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showLoader, hideLoader } from './js/render-functions.js';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!'
        });
        return;
    }

    showLoader();
    fetchImages(query)
        .then(data => {
            hideLoader();
            if (data && data.hits) {
                renderGallery(data.hits);
            } else {
                iziToast.error({
                    title: 'Error',
                    message: 'Something went wrong. Please try again later.'
                });
            }
        })
        .catch(error => {
            hideLoader();
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later.'
            });
            console.error('Error:', error);
        });
});
