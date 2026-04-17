const container = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <img src="${product.image}" width="150"><br>
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  container.appendChild(div);
});

function addToCart(id) {
  alert("Added product " + id);
}