"use client";
import Cart from "@/component/Cart";
import { useSearchParams } from "next/navigation";
import React from "react";

const CartPage = () => {
  const searchParams = useSearchParams();
  const cartNumber = searchParams.get("cartNumber");
  console.log("cartNumber CartPage", cartNumber);

  return (
    <div className='h-100 h-custom' style={{ backgroundColor: "#d2c9ff" }}>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12'>
            <div
              className='card card-registration card-registration-2'
              style={{ borderRadius: 15 }}
            >
              <div className='card-body p-0'>
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
