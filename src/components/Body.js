import DishCard from "./DishCard";
// import { resArr } from "../utils/mockData";
import { useEffect, useState } from "react";
import API_URL from "../utils/components";

const Body = () => {
  const [restaurantsArr, setRestaurantsArr] = useState(null);

  async function fetchData() {
    const PData = await fetch(API_URL);
    const Mdata = await PData.json();
    // console.log(Mdata?.data?.cards[1]?.cared?.card?.greidElements?.infoWithStyle?.restaurants)
    setRestaurantsArr(Mdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

useEffect(()=>{
    fetchData();
}, [])

  if (restaurantsArr == null) {
    return <div> Waiting</div>;
  } else {
    return (
      <div className="bodyContainer">
        <div className="btn">
          <button
            onClick={() => {
              console.log("before filter:", restaurantsArr);

              let filterdArr = restaurantsArr.filter((elem) => {
                if (elem["avgRating"] > 4.2) {
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
          {restaurantsArr.map((elem, index) => {
            return <DishCard key={elem.info.id} resObj={elem} />;
          })}
        </div>
      </div>
    );
  }
};

export default Body;
