// navabar
const linksContainer = document.getElementById('links-container');
const menuBtn = document.querySelector('.toggle-btn');
const links = document.querySelector('.links');

export const navbarToggle = menuBtn.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linkHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const numberItems = document.querySelector('.number-items');

const addedToCard = JSON.parse(localStorage.getItem('product'));

if (addedToCard) {
  const itemsInCart = [...addedToCard];
  console.log(itemsInCart.length);
  numberItems.textContent = parseInt(itemsInCart.length);
} else {
  numberItems.style.display = 'none';
}
