import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { post } from "../services/products_apis";
import ShowProduct from "../components/ShowProduct";

const ProductsScrape = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [product, setProduct] = useState(null);

  const handleSubmit = async () => {
    const productUrl = url.trim();

    if (!productUrl) {
      return;
    }

    try {
      const response = await post("/api/v1/products/scrape", 
        {url: productUrl}
      );

      setProduct(response.data);
      setError("");
    } catch (error) {
      setError(error.response.data.error || 'Failed to fetch the page');
      setProduct(null);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={4}>
      <TextField
        label="Enter Product URL"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ width: "50%" }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      {product &&
        <ShowProduct product={product}/>
      }
    </Box>
  );
};

export default ProductsScrape;
