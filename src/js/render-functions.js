import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    if (images.length === 0) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return;
    }

const imageCards = images.map(image => {
  return `
          <a class="gallery-item" href="${image.largeImageURL}">
              <img src="${image.webformatURL}" alt="${image.tags}" />
              <div class="features">
                  <p>Likes: ${image.likes}</p>
                  <p>Views: ${image.views}</p>
                  <p>Comments: ${image.comments}</p>
                  <p>Downloads: ${image.downloads}</p>
              </div>
          </a>
        `;
  }).join('');

gallery.innerHTML = imageCards;

new SimpleLightbox('.gallery a');
}

export function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
}

export function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}

