const featuredSection = document.querySelector('.featured__products');

const fetchFeatured = async () => {
  featuredSection.innerHTML = `<div class="lds-heart"><div></div></div> <div class="lds-heart"><div></div></div>`;
  try {
    const { data } = await axios.get('/api/cacteria');

    const featureds = data.filter((item) => {
      if (item.feature === 'True') {
        return item;
      }
    });
    const singleItem = featureds
      .map((featured) => {
        const { name, price, url, id } = featured;
        return `  
      <a href="product.html?id=${id}">
      <article class="featured__products--single">
          <img class="img" src="${url}" alt="" />
          <div class="product-info">
            <p>${name}</p>
            <p>$${price}</p>
          </div>
        </article>
        </a>`;
      })
      .join('');
    featuredSection.innerHTML = singleItem;
  } catch (error) {}
};
fetchFeatured();

export default fetchFeatured;
