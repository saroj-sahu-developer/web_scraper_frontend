import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableRow } from "@mui/material";

const ShowProduct = ({ product }) => {
  const { title, description, price, image_url } = product;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 4, p: 2 }}>
      <img
        src={image_url}
        alt={title}
        style={{
          maxWidth: "100%", 
          height: "auto",   
          borderRadius: "10px",
        }}
      />

      <Typography variant="h5" fontWeight="bold" sx={{ mt: 2, textAlign: "center" }}>
        {title}
      </Typography>

      <Typography variant="h6" color="green" fontWeight="bold" sx={{ mt: 1 }}>
        Price: ₹{parseFloat(price).toFixed(2)}
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 600, mt: 2 }}>
        <Table>
          <TableBody>
            {Object.entries(description).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  {key.replace(/_/g, " ")}
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default ShowProduct;
