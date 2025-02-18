import React, { use, useState } from 'react';
import CategoriesMenu from '../components/CategoriesMenu';
import Products from './Products';
import Grid from '@mui/material/Grid2';
import { Paper } from "@mui/material";
import { SearchBar } from '../components/SearchBar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchBy, setSearchBy] = useState('');

  const navigate = useNavigate();

  const updateSelectedCategory = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
  };

  const handleSearchByChange = (productName) => {
    setSearchBy(productName);
  }

  return(
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid size={12} display="flex" justifyContent="center">
        <SearchBar handleSearchByChange={handleSearchByChange} />
      </Grid>

      <Grid size={2}>
        <Grid>
          <Button 
            variant="contained" 
            sx={{mb: 2}}
            onClick={() => navigate("/products/scrape")}
          >
            Scrape Products
          </Button>

          <Paper elevation={3} sx={{ padding: 2 }}>
            <CategoriesMenu
              handleCategoryChange={updateSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid size={10}>
        <Grid>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Products selectedCategoryId={selectedCategory} searchBy={searchBy} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductsPage;
