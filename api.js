export const fetchCats = async (breed, page = 1, category = '') => {
    try {
      const url = new URL(`https://api.thecatapi.com/v1/images/search`);
      url.searchParams.append('limit', 10);
      url.searchParams.append('breed_ids', breed);
      url.searchParams.append('page', page);
      if (category) {
        url.searchParams.append('category_ids', category);
      }
      const response = await fetch(url, {
        headers: {
          'x-api-key': 'live_EsH1nIHkASGakF7HaSLTKC1MAndMS3CgTM82oBWxbBYQGsAcg6YB5pi7KeY9FUhD'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching cats:', error);
      return [];
    }
  };
  
  export const createCat = async (catData) => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/upload', {
        method: 'POST',
        headers: {
          'x-api-key': 'live_EsH1nIHkASGakF7HaSLTKC1MAndMS3CgTM82oBWxbBYQGsAcg6YB5pi7KeY9FUhD',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(catData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error creating cat:', error);
      return null;
    }
  };