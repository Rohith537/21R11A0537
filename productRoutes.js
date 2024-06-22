const express = require('express');
const products = require('../data/products');

const router = express.Router();

// Get all products
router.get('/products', (req, res) => {
  let { category, company, rating, priceRange, availability, sort, page } = req.query;
  let filteredProducts = products;

  // Filtering logic
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  if (company) {
    filteredProducts = filteredProducts.filter(product => product.company === company);
  }
  if (rating) {
    filteredProducts = filteredProducts.filter(product => product.rating >= rating);
  }
  if (priceRange) {
    const [min, max] = priceRange.split('-').map(Number);
    filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
  }
  if (availability) {
    filteredProducts = filteredProducts.filter(product => product.availability === (availability === 'true'));
  }

  // Sorting logic
  if (sort) {
    filteredProducts.sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'discount') return b.discount - a.discount;
      return 0;
    });
  }

  // Pagination logic
  page = parseInt(page) || 1;
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

  res.json(paginatedProducts);
});

// Get product by ID
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
