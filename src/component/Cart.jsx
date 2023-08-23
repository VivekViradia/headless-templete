import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { removeItemMutation } from "../../utils/shopify";

const Cart = ({ checkoutUrl, cost, lines, cartId }) => {
  console.log("checkoutUrl", checkoutUrl);
  console.log("cost", cost);
  console.log("lines", lines);

  const handleRemoveItem = async (cartId, lineId) => {
    const variables = {
      cartId,
      lineIds: [lineId],
    };

    await removeItemMutation(variables);
  };

  return (
    <div className='row g-0'>
      <form action={checkoutUrl} method='GET'>
        <div className='col-lg-8'>
          <div className='p-5'>
            <div className='d-flex justify-content-between align-items-center mb-5'>
              <h1 className='fw-bold mb-0 text-black'>Shopping Cart</h1>
            </div>
            <hr className='my-4' />
            {lines &&
              lines?.edges.map((product, index) => (
                <>
                  <div
                    className='row mb-4 d-flex justify-content-between align-items-center'
                    key={index}
                    href='/products'
                  >
                    <div
                      className='col-md-2 col-lg-2 col-xl-2'
                      // onClick={handleProductPage()}
                    >
                      <img
                        src={product?.node.merchandise.image.url}
                        className='img-fluid rounded-3'
                        alt='Cotton T-shirt'
                      />
                    </div>
                    <div className='col-md-3 col-lg-3 col-xl-3'>
                      <h6 className='text-muted'>
                        {product?.node.merchandise.product.productType}
                      </h6>
                      <h6 className='text-black mb-0'>
                        {product?.node.merchandise.product.title}
                      </h6>
                      <h6 className='text-black mb-0'>
                        Quanitty:{product?.node.quantity}
                      </h6>
                      <h6 className='text-black mb-0'>
                        Variant: {product?.node.merchandise.title}
                      </h6>
                    </div>
                    <div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
                      <h6 className='mb-0'>
                        {product?.node.merchandise.price.currencyCode}
                        {product?.node.merchandise.price.amount}
                      </h6>
                    </div>
                    <div
                      className='col-md-1 col-lg-1 col-xl-1 text-end'
                      onClick={() => {
                        handleRemoveItem(cartId, product?.node?.id);
                      }}
                    >
                      <a href='#!' className='text-muted'>
                        <FaTrashAlt />
                      </a>
                    </div>
                  </div>
                  <hr className='my-4' />
                </>
              ))}

            <div className='pt-5'>
              <h6 className='mb-0'>
                <a href='/' className='text-body'>
                  <i className='fas fa-long-arrow-alt-left me-2'></i>
                  Back to shop
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className='col-lg-4 bg-grey'>
          <div className='p-5'>
            <h3 className='fw-bold mb-5 mt-2 pt-1'>Summary</h3>
            <hr className='my-4' />

            <button
              type='submit'
              className='btn btn-dark btn-block btn-lg'
              data-mdb-ripple-color='dark'
            >
              CheckOut
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
