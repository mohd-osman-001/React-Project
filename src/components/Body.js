import DishCard from "./DishCard";
// import { resArr } from "../utils/mockData";
import { useEffect, useState } from "react";
import { officialSwiggy } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link, resolvePath } from "react-router-dom";

const Body = () => {
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

  if (restaurantsArr == null) {
    return <div className="shimmerMainCont">{<Shimmer />}</div>;
  } else {
    return (
      <div className="bodyContainer">
        <div className="btn">
          <button
            onClick={() => {
              console.log("before filter:", restaurantsArr);

              let filterdArr = restaurantsArr.filter((elem) => {
                if (elem.info.avgRating > 4.2) {
                  return true;
                } else {
                  return false;
                }
              });

              setRestaurantsArr(filterdArr);

              console.log("after filter:", restaurantsArr);
            }}
            className="filterbtn"
          >
            Filter restaurants{" "}
          </button>
        </div>
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
