import { navbarToggle } from './utils/navbar.js';
import { year } from './utils/countDown.js';

const productSection = document.querySelector('.products-section');

const fetchProducts = async () => {
  productSection.innerHTML = `<div class="lds-heart"><div></div></div> <div class="lds-heart"><div></div></div>`;
  try {
    const { data } = await axios.get('/api/cacteria');

    const products = data
      .map((product) => {
        const { name, price, url, id } = product;
        return `  
        <a href="product.html?id=${id}">
        <article class="featured__products--single">
            <img class="img product-img" src="${url}" alt="" />
            <div class="product-info">
              <p>${name}</p>
              <p>$${price}</p>
            </div>
          </article>
          </a>`;
      })
      .join('');
    productSection.innerHTML = products;
  } catch (error) {}
};
fetchProducts();

export default fetchFeatured;
