import React, { useState } from "react";
import { Product } from "./model";
import useProduct from "./hooks/useProduct";
import { useDebounce } from "use-debounce";

type ProductsProps = {
  searchValue : string
};
const Products: React.FC<ProductsProps> = ({
  searchValue
}) => {

  const [debouncedSearch] = useDebounce(searchValue, 1000);
  const { model } = useProduct(debouncedSearch);

  return (
    <>
      <div>
        {model.map((m) => {
          return (
            <div>
              <h1>
                {m.id} {m.name }
              </h1>
              <h2>{m.price}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
