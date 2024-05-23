import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { createTemplate } from './js/render-functions';

const refs = {
  formSearch: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};
const optionsModal = {
  captionsData: 'alt',
  captionDelay: 250,
  className: 'js-backdrop',
};
const lightbox = new simpleLightbox('.gallery a', optionsModal);

refs.formSearch.addEventListener('submit', e => {
  e.preventDefault();

  const searchValue = e.target.elements.search.value.trim();

  if (!searchValue) return;

  refs.gallery.innerHTML = '';

  getImages(searchValue).then(data => {
    renderTemplate(data);
    lightbox.refresh();
  });

  e.target.reset();
});

function renderTemplate(query) {
  const markup = createTemplate(query);

  refs.gallery.insertAdjacentHTML('afterbegin', markup);
}
