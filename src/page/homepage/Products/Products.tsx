import React, { useState } from "react";
import { Product } from "./model";
import useProduct from "./hooks/useProduct";
import { useDebounce } from "use-debounce";

const Products = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300)
  const { model } = useProduct(debouncedSearch);
  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div>
        {model.map((m) => {
          return (
            <div>
              <h1>
                {m.id} {m.name}
              </h1>
              <h2>{m.price}</h2>
            </div>
          );
        })}
      </div >
    </>
  );
};

export default Products;
