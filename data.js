import { createCat } from './api.js';

const addNewCat = async (catData) => {
  try {
    const newCat = await createCat(catData);
    console.log('New cat created:', newCat);
  } catch (error) {
    console.error('Failed to create new cat:', error);
  }
};

const displayCats = (cats) => {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  cats.forEach((cat) => {
    const img = document.createElement('img');
    img.src = cat.url;
    img.alt = `Cat image: ${cat.name} (${cat.breed})`;
    gallery.appendChild(img);
  });
};

export { addNewCat, displayCats };