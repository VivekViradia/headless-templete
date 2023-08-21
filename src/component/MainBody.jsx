"use client";
import React, { useEffect, useState } from "react";
import { getCollections } from "../../utils/shopify";
import Collection from "./Collection";

const MainBody = () => {
  const [data, setData] = useState();

  useEffect(() => {
    function fetchData() {
      try {
        const { collections } = getCollections();
        setData(collections);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  console.log("collections____", data);
  return (
    <div>
      {/* banner bg main start */}
      {/* banner bg main end */}
      {/* electronic section start */}
      <div className='fashion_section'>
        <div id='main_slider' className='carousel slide' data-ride='carousel'>
          <div className='carousel-inner'>
            {/* <div className='carousel-item active'>
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
            </div> */}
            {/* {collections &&
              collections?.node.map((collection, index) =>
                console.log("Map function", collection, index),
              )} */}
            <Collection />
          </div>
          <a
            className='carousel-control-prev'
            href='#main_slider'
            role='button'
            data-slide='prev'
          >
            <i className='fa fa-angle-left' />
          </a>
          <a
            className='carousel-control-next'
            href='#main_slider'
            role='button'
            data-slide='next'
          >
            <i className='fa fa-angle-right' />
          </a>
        </div>
      </div>
      {/* electronic section end */}
      {/* Javascript files*/}
      {/* sidebar */};
    </div>
  );
};

export default MainBody;
