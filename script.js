const container = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
  <img src="${product.image}" width="180">
  <h3>${product.name}</h3>
  <p>₹${product.price}</p>
  <button>Add to Cart</button>
`;

  container.appendChild(div);
});

function addToCart(id) {
  alert("Added product " + id);
}