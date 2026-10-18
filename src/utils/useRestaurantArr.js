import { useState, useEffect } from "react";
import { officialSwiggy } from "./constants";

const useRestaurantArr = () => {
  const [restaurantsArr, setRestaurantsArr] = useState(null);

  async function fetchData() {
    const response = await fetch(officialSwiggy);

    const data = await response.json();

    setRestaurantsArr(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantsArr;
};

export default useRestaurantArr;
