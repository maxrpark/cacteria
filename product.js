import { navbarToggle } from './utils/navbar.js';
import fetchSingleProduct from './utils/singleProduct.js';
import { year } from './utils/countDown.js';

const productContainer = document.querySelector('.product-container');
const addBtn = document.querySelector('btn-product');

productContainer.addEventListener('click', (e) => {
  const btn = e.target;
  if (btn.classList.contains('btn-product')) {
    const productName = btn.dataset.name;
    const productPrice = btn.dataset.price;

    let addProduct = { productName, productPrice };

    let product;

    if (localStorage.getItem('product')) {
      product = JSON.parse(localStorage.getItem('product'));
    } else {
      product = [];
    }
    // product.push('apple');
    product.push(addProduct);
    localStorage.setItem('product', JSON.stringify(product));
  }
});
