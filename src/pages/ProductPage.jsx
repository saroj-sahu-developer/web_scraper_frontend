import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../services/products_apis';
import ShowProduct from '../components/ShowProduct';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await get(`/api/v1/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product data');
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ShowProduct product={product} />
    </div>
  );
};

export default ProductPage;
