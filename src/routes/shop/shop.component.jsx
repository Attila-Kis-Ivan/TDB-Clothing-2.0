import { Routes, Route } from "react-router-dom";

import CategoriesPreView from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreView />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
