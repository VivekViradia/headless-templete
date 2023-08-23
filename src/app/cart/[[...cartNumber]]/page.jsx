"use client";
import Cart from "@/component/Cart";
import { useAppContext } from "@/lib/AppContext";
import React, { useEffect, useState } from "react";
import { getCartProducts } from "../../../../utils/shopify";

const CartPage = () => {
  const { productCartId, setProductCartId } = useAppContext();
  const [cartProducts, setCartProducts] = useState();

  const fetchData = async (cartId) => {
    const { cart } = await getCartProducts(cartId);
    setCartProducts(cart);
  };

  useEffect(() => {
    fetchData(productCartId).catch(console.error);
  }, [productCartId]);

  console.log("cartProducts", cartProducts);

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
                <Cart
                  cartId={cartProducts?.id}
                  checkoutUrl={cartProducts?.checkoutUrl}
                  cost={cartProducts?.cost.totalAmount}
                  lines={cartProducts?.lines}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
