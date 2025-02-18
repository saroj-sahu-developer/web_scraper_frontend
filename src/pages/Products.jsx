import React from 'react';
import { useState, useEffect } from 'react';
import { get } from '../services/products_apis';
import ListProducts from '../components/ListProducts';

const Products = ({selectedCategoryId, searchBy}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        let response;
        if(selectedCategoryId && searchBy) {
          response = await get(`/api/v1/categories/${selectedCategoryId}/products?search_by=${searchBy}`);
        }
        else if(selectedCategoryId) {
          response = await get(`/api/v1/categories/${selectedCategoryId}/products`);
        }
        else if(searchBy) {
          response = await get(`/api/v1/products?search_by=${searchBy}`);
        }
        else{
          response = await get("/api/v1/products");
        }
        
        setProducts(response.data);
      }
      catch(error) {
        console.error("Error fetching products:", error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategoryId, searchBy]);

  return (
    <ListProducts loading={loading} products={products} />
  );
}

export default Products;
