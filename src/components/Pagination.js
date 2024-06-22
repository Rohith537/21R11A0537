import React from 'react';
import { Box, Button } from '@mui/material';

const Pagination = ({ page, setPage }) => {
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Button onClick={handlePrevious} disabled={page === 1}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </Box>
  );
};

export default Pagination;
