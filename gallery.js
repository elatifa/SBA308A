import { fetchCats, createCat } from './api.js';
import { displayCats } from './data.js';
import jsdom from 'jsdom';

const html = '<html><body><div id="gallery"></div><input id="search-input"><button id="search-button">Search</button><select id="category-select"></select><button id="prev-button">Prev</button><button id="next-button">Next</button><p id="page-number"></p></body></html>';
const document = (new jsdom.JSDOM(html)).window.document;

if (document) {
  const gallery = document.getElementById('gallery');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const categorySelect = document.getElementById('category-select');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const pageNumber = document.getElementById('page-number');
  let currentPage = 1;

  const fetchAndDisplayCats = async () => {
    const breed = searchInput.value.trim();
    const category = categorySelect ? categorySelect.value : '';
    if (breed) {
      const cats = await fetchCats(breed, currentPage, category);
      displayCats(cats);
      pageNumber.innerText = `Page ${currentPage}`;
    } else {
      alert('Please enter a breed to search.');
    }
  };

  searchButton.addEventListener('click', () => {
    currentPage = 1;
    fetchAndDisplayCats();
  });

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      fetchAndDisplayCats();
    }
  });

  nextButton.addEventListener('click', () => {
    currentPage++;
    fetchAndDisplayCats();
  });

  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      currentPage = 1;
      fetchAndDisplayCats();
    });
  }
} else {
  console.error('Error: Document object is null');
}
