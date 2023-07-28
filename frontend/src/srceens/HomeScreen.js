import axios from 'axios'

const HomeScreen = {
  render: async () => {
    const response = await axios("http://localhost:5000/api/products", {
      url: 'http://localhost:5000/api/products',
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response || response.statusText !== 'OK') {
      return `<div>Error in getting data</div>`;
    }
    const products = await response.data;

    return `
    <ul class="products">
    ${products
      .map((product) => {
        return `
          <li>
     <div class="product">
       <a href="/#/product/${product._id}">
         <img src="${product.image}" alt="product 1" />
       </a>

      <div class="product-name">
        <a href="/#/product/1">${product.name}</a>
      </div>

     <div class="product-brand">${product.brand}</div>

     <div class="product-price">$${product.price}</div>
   </div>
  </li>`;
      })
      .join("")}
    </ul>
    `;
  },
};

export default HomeScreen;
