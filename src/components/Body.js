import DishCard from "./DishCard";
// import { resArr } from "../utils/mockData";
import { useEffect, useState } from "react";
import {API_URL} from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsArr, setRestaurantsArr] = useState(null);

  const [latLong, setLatLong] = useState({
    lat: 28.656148,
    lng: 77.186715,
  });

  async function fetchData() {
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
  }, [latLong]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    // 2. Success callback function
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(
        "got coordinates:: ",
        latitude.toFixed(6),
        longitude.toFixed(6),
      );
      setLatLong({
        lat: latitude.toFixed(6),
        lng: longitude.toFixed(6),
      });
    };

    // 3. Error callback function
    const handleError = (err) => {
      setError(err.message);
    };

    // 4. Request the current position
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true, // Request high accuracy (e.g., GPS over cell tower)
      timeout: 5000, // Time in ms to wait before timing out
      maximumAge: 0, // Do not use cached locations
    });
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
            return <DishCard key={elem.info.id} resObj={elem} />;
          })}
        </div>
      </div>
    );
  }
};

export default Body;
