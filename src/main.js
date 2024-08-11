import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

let query = '';
let page = 1;
let totalHits = 0;
let data = {};

document.querySelector('form').addEventListener('submit', async event => {
  event.preventDefault();
  query = document.getElementById('search-input').value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  page = 1;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  data = await fetchImages(query, page);
  hideLoader();

  if (data && data.hits.length > 0) {
    totalHits = data.totalHits;
    renderGallery(data.hits);
    showLoadMoreButton();
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
});

document.querySelector('.btn').addEventListener('click', async () => {
  page += 1;

  showLoader();
  const newData = await fetchImages(query, page);
  data.hits.push(...newData.hits);
  //   data.hits = [...data.hits, ...newData.hits];

  hideLoader();
  if (data && data.hits.length > 0) {
    renderGallery(data.hits);
    scrollPage();
    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'End',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  }
});

function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}