import React from "react";

const Products = ({ product }) => {
  console.log("PPP", product);
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {product?.edges?.map((product, index) => (
            <a href='#' className='group' key={index}>
              <div className='aspect-h-4 aspect-w-4 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                {/* <img
                  src={product?.edge?.images.edges[0].node.url}
                  alt={product?.edge?.images.edges[0].node.altText}
                  //   src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  //   alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                /> */}
              </div>

              <h3 className='mt-4 text-sm text-gray-700'>
                {product.node.title}
              </h3>
              {/* {product?.node?.variants.edges[0].node.price.amount} */}
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {product?.node?.variants.edges[0].node.price.currencyCode}
                {product?.node?.variants.edges[0].node.price.amount}
              </p>
            </a>
          ))}

          {/* <!-- More products... --> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
