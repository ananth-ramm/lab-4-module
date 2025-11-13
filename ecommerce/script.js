const productContainer = document.getElementById('productContainer');
const categorySelect = document.getElementById('categorySelect');

let products = [];

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  products = await response.json();
  displayProducts(products);
  populateCategories(products);
}

function populateCategories(items) {
  const categories = [...new Set(items.map(item => item.category))];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.appendChild(option);
  });
}

function displayProducts(items) {
  productContainer.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text text-muted small">${item.description.slice(0, 80)}...</p>
          <div class="mt-auto">
            <p class="fw-bold mb-2">$${item.price}</p>
            <button class="btn btn-primary w-100">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

categorySelect.addEventListener('change', () => {
  const selected = categorySelect.value;
  if (selected === 'all') {
    displayProducts(products);
  } else {
    const filtered = products.filter(item => item.category === selected);
    displayProducts(filtered);
  }
});

fetchProducts();
