import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineState from "../utils/useOnlineState";

const MainContent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel();
  console.log("first", listOfRestaurants)
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const data = await response.json();
console.log(data)
      setListOfRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurant(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filterRes = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("search", filterRes);
    // if (
    //   searchText === filterRes
    //     ? setListOfRestaurants(filterRes)
    //     : setListOfRestaurants("not found")
    // )
    setFilterRestaurant(filterRes);
    setSearchText("");
  };

  const filterByTopRated = () => {
    const filteredData = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.2
    );
    console.log("first");
    setFilterRestaurant(filteredData);
  };

  const onlineStatus = useOnlineState();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection!!
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search_btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter_btn" onClick={filterByTopRated}>
          Filter by Top Rated Restaurants
        </button>
      </div>
      <div className="main_cards">
        {/* {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {filterRestaurant.map((restaurant) =>
          restaurant.info.promoted ? (
            <RestaurantCardPromoted resData={restaurant} />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default MainContent;
