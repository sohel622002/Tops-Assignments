import React, { useEffect, useState } from "react";
import { PRODUCTDATA } from "../ProductData";
import Searchbar from "./Searchbar";
import DataTable from "./DataTable";

export default function SearchableTable() {
  const [products, setProducts] = useState(PRODUCTDATA);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!searchText) return setProducts(PRODUCTDATA);
    const updatedProduct = PRODUCTDATA.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(updatedProduct);
    setProducts(updatedProduct);
  }, [searchText]);
  return (
    <section className="container my-4">
      <h2>Search products: {searchText}</h2>
      <Searchbar setSearchText={setSearchText} />
      <DataTable products={products} />
    </section>
  );
}
