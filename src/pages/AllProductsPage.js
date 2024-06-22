// src/pages/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { Container, Grid } from '@mui/material';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get('/products', { params: { ...filters, sort, page } })
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [filters, sort, page]);

  return (
    <Container>
      <FilterBar setFilters={setFilters} setSort={setSort} />
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination page={page} setPage={setPage} />
    </Container>
  );
};

export default AllProductsPage;
