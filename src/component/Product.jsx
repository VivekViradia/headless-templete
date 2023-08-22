"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProductByHandle } from "../../utils/shopify";
const Product = () => {
  const searchParams = useSearchParams();
  const productHandle = searchParams.get("productHandle");

  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);

  const fetchData = async (productHandle) => {
    const { product } = await getProductByHandle(productHandle);
    setData(product);
  };

  useEffect(() => {
    setImageUrl(data?.images.edges[0].node.url);
  }, [data]);

  useEffect(() => {
    fetchData(productHandle).catch(console.error);
  }, []);

  console.log("productByHandle", data);
  const [imageUrl, setImageUrl] = useState();

  const handleProductVariantImage = (Url) => {
    console.log("Clicked", Url);
    setImageUrl(Url);
  };

  const handleQuantityPlus = () => {
    if (quantity <= 5) {
      setQuantity(quantity + 1);
    }
    console.log("quantity", quantity);
  };
  const handleQuantityMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

    console.log("quantity", quantity);
  };
  return (
    <div className='row gx-5'>
      <aside className='col-lg-6'>
        <div className='border rounded-4 mb-3 d-flex justify-content-center'>
          <a
            data-fslightbox='mygalley'
            className='rounded-4'
            target='_blank'
            data-type='image'
          >
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100",
                margin: "auto",
              }}
              className='rounded-4 fit'
              src={imageUrl}
            />
          </a>
        </div>
        <div className='d-flex justify-content-center mb-3'>
          {data &&
            data?.images?.edges.map((img, index) => (
              <a
                key={index}
                data-fslightbox='mygalley'
                className='border mx-1 rounded-2'
                target='_blank'
                data-type='image'
                onClick={() => handleProductVariantImage(img.node.url)}
              >
                <img
                  width='60'
                  height='60'
                  className='rounded-2'
                  src={img.node.url}
                />
              </a>
            ))}
        </div>
        {/* <!-- thumbs-wrap.// --> */}
        {/* <!-- gallery-wrap .end// --> */}
      </aside>

      <main className='col-lg-6'>
        <div className='ps-lg-3'>
          <h4 className='title text-dark'>
            {data?.title} <br />
            {data?.productType}
          </h4>
          <div className='d-flex flex-row my-3'>
            <div className='text-warning mb-1 me-2'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fas fa-star-half-alt'></i>
              <span className='ms-1'>4.5</span>
            </div>
            <span className='text-muted'>
              <i className='fas fa-shopping-basket fa-sm mx-1'></i>154 orders
            </span>
            <span className='text-success ms-2'>In stock</span>
          </div>

          <div className='mb-3'>
            <span className='h5'>
              {data?.priceRange?.maxVariantPrice.currencyCode}
              {data?.priceRange?.maxVariantPrice.amount}
            </span>
          </div>

          <p>
            Modern look and quality demo item is a streetwear-inspired
            collection that continues to break away from the conventions of
            mainstream fashion. Made in Italy, these black and brown clothing
            low-top shirts for men.
          </p>

          <div className='row'>
            <dt className='col-3'>Type:</dt>
            <dd className='col-9'>Regular</dd>

            <dt className='col-3'>Color</dt>
            <dd className='col-9'>Brown</dd>

            <dt className='col-3'>Material</dt>
            <dd className='col-9'>Cotton, Jeans</dd>

            <dt className='col-3'>Brand</dt>
            <dd className='col-9'>Reebook</dd>
          </div>

          <hr />

          <div className='row mb-4'>
            <div className='col-md-4 col-6'>
              <label className='mb-2'>Size</label>{" "}
              <select
                className='form-select border border-secondary'
                style={{ height: 35 }}
              >
                {data &&
                  data?.variants?.nodes.map((variant, index) => (
                    <option key={index}>{variant.title}</option>
                  ))}
              </select>
            </div>
            {/* <!-- col.// --> */}
            <div className='col-md-4 col-6 mb-3'>
              <label className='mb-2 d-block'>Quantity</label>
              <div className='input-group mb-3' style={{ width: 170 }}>
                <button
                  className='btn btn-white border border-secondary px-3'
                  type='button'
                  id='button-addon1'
                  data-mdb-ripple-color='dark'
                  onClick={() => handleQuantityMinus()}
                >
                  -
                </button>
                <input
                  type='number'
                  value={quantity}
                  className='form-control text-center border border-secondary'
                  aria-label='Example text with button addon'
                  aria-describedby='button-addon1'
                />
                <button
                  className='btn btn-white border border-secondary px-3'
                  type='button'
                  id='button-addon2'
                  data-mdb-ripple-color='dark'
                  onClick={() => handleQuantityPlus()}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <a href='#' className='btn btn-warning shadow-0'>
            {" "}
            Buy now{" "}
          </a>
          <a href='#' className='btn btn-primary shadow-0'>
            {" "}
            <i className='me-1 fa fa-shopping-basket'></i> Add to cart{" "}
          </a>
          <a
            href='#'
            className='btn btn-light border border-secondary py-2 icon-hover px-3'
          >
            {" "}
            <i className='me-1 fa fa-heart fa-lg'></i> Save{" "}
          </a>
        </div>
      </main>
    </div>
  );
};

export default Product;
