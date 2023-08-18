"use client";
import Products from "@/component/Products";
import React, { useEffect, useState } from "react";
import getAllProducts from "../../../utils/shopify";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const { products } = await getAllProducts();
      setProduct(products);
      //   console.log("products", products);
    }
    fetchData();
  }, []);

  //   console.log("products--------gsdfgfg-", product);

  return (
    <>
      {/* {product?.edges.map((product) => ( */}
      <Products product={product} />
      {/* ))} */}
    </>
  );
};

export default ProductPage;
