import DishCard from "./DishCard";
// import { resArr } from "../utils/mockData";
// import { useEffect, useState } from "react";
// import { officialSwiggy } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link, resolvePath } from "react-router-dom";
import useRestaurantArr from "../utils/useRestaurantArr";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const restaurantsArr = useRestaurantArr();

  const isOnline = useOnlineStatus();
  console.log("I am isOnline:", isOnline);

  if (restaurantsArr == null) {
    return <div className="shimmerMainCont">{<Shimmer />}</div>;
  } else {
    return (
      <div className="bodyContainer">
        <div className="bc1">
          {restaurantsArr.map((elem) => {
            return (
              <Link to={`/menu/${elem.info.id}`} key={elem.info.id}>
                <DishCard resObj={elem} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Body;
