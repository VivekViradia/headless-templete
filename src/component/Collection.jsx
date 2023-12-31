"use client";
import Link from "next/link";
import React from "react";
// import { getCollections } from "../../utils/shopify";

const Collection = ({ collections }) => {
  return (
    <div className='carousel-item active'>
      {collections &&
        collections?.nodes.map((collection, index) => (
          <div className='container' key={index}>
            <h1 className='fashion_taital'>{collection.title}</h1>
            <div className='fashion_section_2'>
              <div className='row'>
                {collection?.products.edges.map((product, index) => (
                  <div className='col-lg-4 col-sm-4' key={index}>
                    <div className='box_main'>
                      <h4 className='shirt_text'>{product.node.title}</h4>
                      <p className='price_text'>
                        Price{" "}
                        <span style={{ color: "#262626" }}>
                          {product.node.priceRange.maxVariantPrice.currencyCode}
                          {product.node.priceRange.maxVariantPrice.amount}
                        </span>
                      </p>
                      <div className='tshirt_img'>
                        <img src={product.node.images.nodes[0].url} />
                      </div>
                      <div className='btn_main'>
                        <div className='buy_bt'>
                          <Link
                            href={{
                              pathname: `/products/${product.node.handle}`,
                              query: { productHandle: product.node.handle },
                            }}
                            legacyBehavior
                          >
                            <a href='/products/'>View</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Collection;
