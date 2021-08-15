const productContainer = document.querySelector('.product-container');
const productName = document.querySelector('.product-name');

const fetchSingleProduct = async () => {
  productContainer.innerHTML = `<div class="lds-heart"><div></div></div> <div class="lds-heart"><div></div></div>`;
  try {
    const id = window.location.search;

    const {
      data: { fields },
    } = await axios.get(`/api/product${id}`);
    const { category, price, name, desc } = fields;

    const img = fields.image[0].url;
    productName.textContent = `${name}`;
    window.document.title = `${name} || Cacteria`;

    productContainer.innerHTML = ` 
    <div class="after">
    <img src="${img}" class="img product-img" alt="${name}" />
    </div>
      <div class="product-container__info">
        <h3>${name}</h3>
        <div class="product-container__info--details">
          <p>Category : ${category}</p>
          <p>Price: $ ${price}</p>
        </div>
        <p>
         ${desc}
        </p>
    
          <a class="btn-main btn-product" data-name="${name}" data-price="${price}" " href="checkout.html">Add to the card</a> 
        
      </div>`;

    // RECOMENDED
    const recommended = document.querySelector('.recommended');

    console.log(recommended);

    const recommendProduct = async () => {
      const { data } = await axios.get('/api/cacteria');

      const categories = data.filter((item) => {
        if (item.category === `${category}`) {
          return item;
        }
      });
      let showRecomended = categories.slice(0, 3);

      const singleItem = showRecomended
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
      recommended.innerHTML = singleItem;
    };
    recommendProduct();
  } catch (error) {
    console.log(error);
    document.body.innerHTML = `<h2>Error</h2>`;
  }
};
fetchSingleProduct();
export default fetchSingleProduct;
