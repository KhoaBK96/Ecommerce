import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../model";
import { products } from "../fakeData";

const useProduct = (search = "") => {
  const [model, setModel] = useState<Product[]>([]);

  const searchProduct = useCallback((searchValue: string) => {
    const formatted = searchValue.trim().toLowerCase();
    return formatted === ""
      ? [...products]
      : products.filter((p) => {
          return p.name.toLowerCase().includes(formatted);
        });
  }, []);

  useEffect(() => {
    const newProducts = searchProduct(search);
    setModel(newProducts);
  }, [search, searchProduct]);

  return {
    model,
    searchProduct,
  };
};

export default useProduct;
