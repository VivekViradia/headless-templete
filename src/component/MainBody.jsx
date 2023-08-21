"use client";
import React, { useEffect, useState } from "react";
import { getCollections } from "../../utils/shopify";
import Collection from "./Collection";

const MainBody = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const { collections } = await getCollections();
    setData(collections);
  };
  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  console.log("collections____", data);
  return (
    <div id='main_slider' className='carousel slide' data-ride='carousel'>
      <div className='carousel-inner'>
        {/* {collections &&
              collections?.node.map((collection, index) =>
                console.log("Map function", collection, index),
              )} */}
        <Collection collections={data} />
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
  );
};

export default MainBody;
