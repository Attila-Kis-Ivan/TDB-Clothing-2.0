import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap, selectCaategoriesIsLoading } from "../../store/categories/category.selector";


import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreView = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCaategoriesIsLoading);
  return (
    <Fragment>
    {isLoading ? <Spinner/> :
      (Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })
    )}
    </Fragment>
  );
};

export default CategoriesPreView;
