"use client";
import React from "react";

const Collection = async () => {
  return (
    <div className='carousel-item active'>
      <div className='container'>
        <h1 className='fashion_taital'>Man &amp; Woman Fashion</h1>
        <div className='fashion_section_2'>
          <div className='row'>
            <div className='col-lg-4 col-sm-4'>
              <div className='box_main'>
                <h4 className='shirt_text'>Man T -shirt</h4>
                <p className='price_text'>
                  Price <span style={{ color: "#262626" }}>$ 30</span>
                </p>
                <div className='tshirt_img'>
                  <img src='images/tshirt-img.png' />
                </div>
                <div className='btn_main'>
                  <div className='buy_bt'>
                    <a href='#'>Buy Now</a>
                  </div>
                  <div className='seemore_bt'>
                    <a href='#'>See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-4'>
              <div className='box_main'>
                <h4 className='shirt_text'>Man -shirt</h4>
                <p className='price_text'>
                  Price <span style={{ color: "#262626" }}>$ 30</span>
                </p>
                <div className='tshirt_img'>
                  <img src='images/dress-shirt-img.png' />
                </div>
                <div className='btn_main'>
                  <div className='buy_bt'>
                    <a href='#'>Buy Now</a>
                  </div>
                  <div className='seemore_bt'>
                    <a href='#'>See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-4'>
              <div className='box_main'>
                <h4 className='shirt_text'>Woman Scart</h4>
                <p className='price_text'>
                  Price <span style={{ color: "#262626" }}>$ 30</span>
                </p>
                <div className='tshirt_img'>
                  <img src='images/women-clothes-img.png' />
                </div>
                <div className='btn_main'>
                  <div className='buy_bt'>
                    <a href='#'>Buy Now</a>
                  </div>
                  <div className='seemore_bt'>
                    <a href='#'>See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
