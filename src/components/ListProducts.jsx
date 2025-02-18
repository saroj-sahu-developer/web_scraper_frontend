import React from 'react';
import ProductCard from './ProductCard';
import { Box, CircularProgress, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';

const ListProducts = ({products, loading}) => {
  if (loading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} xs={6} sm={4} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListProducts;
