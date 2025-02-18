import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

export const SearchBar = ({handleSearchByChange}) => {
  const [productName, setProductName] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearchByChange(productName);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [productName]);

  return (
    <TextField 
      value={productName} 
      onChange={handleProductNameChange}
      placeholder="Search Products"
      variant="outlined"
      sx={{
        width: "50%",
        borderRadius: "25px",
        alignSelf: "center",
        "& .MuiOutlinedInput-root": {
          borderRadius: "25px",
          textAlign: "center",
        },
        "& .MuiOutlinedInput-input": {
          textAlign: "center", 
        },
        "& .MuiInputBase-input::placeholder": {
          fontWeight: "bold", 
          textAlign: "center",
        },
      }}
    />
  )
}
