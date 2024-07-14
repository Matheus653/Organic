const priceRange = document.getElementById('priceRange');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');

priceRange.addEventListener('input', function() {
    minPrice.textContent = `R$0`;
    maxPrice.textContent = `R$${priceRange.value}`;
});