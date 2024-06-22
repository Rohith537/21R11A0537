// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return null;

  return (
    <Container>
      <Paper elevation={3}>
        <Box p={3}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6">{product.company}</Typography>
          <Typography variant="body1">Category: {product.category}</Typography>
          <Typography variant="body1">Price: ${product.price}</Typography>
          <Typography variant="body1">Rating: {product.rating}</Typography>
          <Typography variant="body1">Discount: {product.discount}%</Typography>
          <Typography variant="body1">Availability: {product.availability ? 'In stock' : 'Out of stock'}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductPage;
