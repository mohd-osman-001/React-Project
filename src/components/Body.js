import DishCard from "./DishCard";
// import { resArr } from "../utils/mockData";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link, resolvePath } from "react-router-dom";

const Body = () => {
  const [restaurantsArr, setRestaurantsArr] = useState(null);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      let lat = " ";
      let lng = " ";

      // 1. Check if the browser supports the Geolocation API
      if (!navigator.geolocation) {
        console.log("Browser doesn't provide location");
        reject("Browser doesn't provide locations");
      }

      // 2. Success callback function
      const handleSuccess = (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log(
          "got coordinates::",
          latitude.toFixed(6),
          longitude.toFixed(6),
        );
        lat = latitude.toFixed(6);
        lng = longitude.toFixed(6);
        resolve({ lat, lng });
      };

      // 3. Error callback function
      const handleError = (err) => {
        console.log("error happend");
        reject(err.message);
      };

      // 4. Request the current position
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true, // Request high accuracy (e.g., GPS over cell tower)
        timeout: 5000, // Time in ms to wait before timing out
        maximumAge: 0, // Do not use cached locations
      });
    });
  };

  async function fetchData() {
    const latLong = await getCurrentPosition();
    
    const response = await fetch(
      API_URL +
        `lat=${latLong.lat}&lng=${latLong.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
    );

    const data = await response.json();

    setRestaurantsArr(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    console.log(
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
