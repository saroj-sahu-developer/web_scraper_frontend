import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductsScrape from "./pages/ProductsScrape";
import Layout from "./pages/Layout";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />} />
        <Route path="home" element={<Layout />} />
        <Route path="products" >
          <Route index element={<ProductsPage />} />
          <Route path="scrape" element={<ProductsScrape />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
