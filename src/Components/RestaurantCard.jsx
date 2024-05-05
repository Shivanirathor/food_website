import React from "react";
import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(first)
  return (
    <div>
      <div className="product-listing">
        <img src={CDN_URL + resData.info.cloudinaryImageId} alt="not load" />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.locality}</h4>
        <h3>{resData.info.avgRating}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
