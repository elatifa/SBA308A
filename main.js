import './gallery.js';
import { fetchCats } from './api.js';
import { addNewCat } from './data.js';

function main(document) {
  document.getElementById('search-button').addEventListener('click', async () => {
    const searchInput = document.getElementById('search-input');
    const breed = searchInput.value.trim();
    if (breed) {
      const cats = await fetchCats(breed);
      displayCats(cats);
    } else {
      alert('Please enter a breed to search.');
    }
  });

  let currentPage = 1;
  const fetchAndDisplayCats = async () => {
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');
    const breed = searchInput.value.trim();
    const category = categorySelect ? categorySelect.value : '';
    if (breed) {
      const cats = await fetchCats(breed, currentPage, category);
      displayCats(cats);
      document.getElementById('page-number').innerText = `Page ${currentPage}`;
    } else {
      alert('Please enter a breed to search.');
    }
  };

  document.getElementById('search-button').addEventListener('click', () => {
    currentPage = 1;
    fetchAndDisplayCats();
  });

  document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      fetchAndDisplayCats();
    }
  });

  document.getElementById('next-button').addEventListener('click', () => {
    currentPage++;
    fetchAndDisplayCats();
  });

  const categorySelect = document.getElementById('category-select');
  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      currentPage = 1;
      fetchAndDisplayCats();
    });
  }

  document.getElementById('some-add-button').addEventListener('click', () => {
    const newCatData = [
        {
          "id": "1vh",
          "url": "https://cdn2.thecatapi.com/images/1vh.jpg",
          "width": 306,
          "height": 408
        },
        {
          "id": "6ie",
          "url": "https://cdn2.thecatapi.com/images/6ie.jpg",
          "width": 500,
          "height": 333
        },
        {
          "id": "7d3",
          "url": "https://cdn2.thecatapi.com/images/7d3.jpg",
          "width": 500,
          "height": 333
        },
        {
          "id": "8o8",
          "url": "https://cdn2.thecatapi.com/images/8o8.jpg",
          "width": 1936,
          "height": 2592
        },
        {
          "id": "9tm",
          "url": "https://cdn2.thecatapi.com/images/9tm.jpg",
          "width": 453,
          "height": 400
        },
        {
          "id": "abj",
          "url": "https://cdn2.thecatapi.com/images/abj.jpg",
          "width": 560,
          "height": 676
        },
        {
          "id": "da9",
          "url": "https://cdn2.thecatapi.com/images/da9.jpg",
          "width": 1024,
          "height": 768
        },
        {
          "id": "MTk2MDMyNQ",
          "url": "https://cdn2.thecatapi.com/images/MTk2MDMyNQ.jpg",
          "width": 1840,
          "height": 1232
        },
        {
          "id": "MjA4OTc4Mw",
          "url": "https://cdn2.thecatapi.com/images/MjA4OTc4Mw.jpg",
          "width": 1280,
          "height": 857
        },
        {
          "id": "pK_t-KYIi",
          "url": "https://cdn2.thecatapi.com/images/pK_t-KYIi.jpg",
          "width": 637,
          "height": 421
        }
      ];
      
    addNewCat(newCatData);
  });

  const displayCats = (cats) => {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    cats.forEach(cat => {
      const img = document.createElement('img');
      img.src = cat.url;
      img.alt = ('Cat image');
      gallery.appendChild(img);
    });
  };
}

if (typeof document !== 'undefined') {
  main(document);
}