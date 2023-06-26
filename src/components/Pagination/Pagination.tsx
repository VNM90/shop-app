import React from 'react';
import MuiPagination from '@mui/material/Pagination';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, onPageChange }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange({ selected: page - 1 });
  };

  return (
    <MuiPagination 
      count={pageCount} 
      page={currentPage + 1} 
      onChange={handleChange} 
    />
  );
};

export default Pagination;
