import React from 'react';
import { Box, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';

const FilterBar = ({ setFilters, setSort }) => {
  const handleFilterChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <Box display="" justifyContent="space-between" mb={3}>
      <br></br>
      <TextField label="Category" name="category" onChange={handleFilterChange} />
      <TextField label="Company" name="company" onChange={handleFilterChange} />
      <TextField label="Rating" name="rating" onChange={handleFilterChange} />
      <TextField label="Price Range" name="priceRange" onChange={handleFilterChange} />
      
      <FormControl>
        <InputLabel>Sort By</InputLabel>
        <Select name="sort" onChange={handleSortChange}>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="discount">Discount</MenuItem>
        </Select>
      </FormControl><br></br>
      <Button variant="contained" color="primary" onClick={() => setFilters({})}>
        Clear Filters
      </Button>
    </Box>
  );
};

export default FilterBar;
