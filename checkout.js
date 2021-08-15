import { navbarToggle } from './utils/navbar.js';
import { year } from './utils/countDown.js';
const addedToCard = JSON.parse(localStorage.getItem('product'));
const cartContainer = document.querySelector('.addedProducts');
const totalAmount = document.querySelector('.total-amount');
const totalEl = document.querySelector('.total');

const cartItems = addedToCard
  .map((item) => {
    const { productName, productPrice } = item;

    return ` <article class="cart-product" >
  <h4>${productName}</h4>
          <h4>$ ${productPrice}</h4>
      
        </article>`;
  })
  .join('');
console.log(cartContainer.dataset.id);
cartContainer.innerHTML = cartItems;

const total = addedToCard.reduce((acc, currItem) => {
  acc += +currItem.productPrice;
  return acc;
}, 0);
if (total > 0) {
  totalAmount.textContent = total;
} else {
  totalEl.style.display = 'none';
}
const clearCart = document.querySelector('.clear-cart');
clearCart.addEventListener('click', () => {
  localStorage.removeItem('product');
  document.location.href = 'index.html';
});

const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.modal');
const payBtn = document.getElementById('pay');

closeModal.addEventListener('click', () => {
  modalContainer.classList.toggle('show-modal');
});
payBtn.addEventListener('click', () => {
  modalContainer.classList.toggle('show-modal');
});
