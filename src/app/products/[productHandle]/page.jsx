"use client";
import Product from "@/component/Product";
import React from "react";

const ProductPage = () => {
  return (
    <>
      <div className='py-5 pt-5' style={{ paddingTop: "20px" }}>
        <div className='container'>
          <Product />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
