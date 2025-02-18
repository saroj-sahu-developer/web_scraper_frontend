import React from 'react';
import { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, Typography, FormControl, FormLabel } from '@mui/material';
import { get } from '../services/products_apis';

const CategoriesMenu = ({handleCategoryChange, selectedCategory}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async() => {
      try {
        const response = await get("/api/v1/categories");
        setCategories(response.data);
      }
      catch(error) {
        console.log("Error while Feching categories: ", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedCategory} onChange={handleCategoryChange}>
        <FormControlLabel value="" control={<Radio />} label="ALL" />

        {categories.map((category) => (
          <FormControlLabel key={category.id} value={category.id} control={<Radio />} label={category.title} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CategoriesMenu;
