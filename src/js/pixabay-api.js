
export function searchForm(query) {
    const pixaBay = `https://pixabay.com/api/`;
    const API_KEY = '43243266-80f7041a5bbe3ede3c247f49c';
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true
    })
    const url = `${pixaBay}?${params}`;
    return fetch(url)

    .then(res => {
        return res.json();
      })
      .catch(err => {
        throw new Error(err.status);
      });
   
};

