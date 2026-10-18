import { baseUrl } from "../utils/constants";

const DishCard = ({ resObj }) => {
  const { name, cuisines, avgRating, delieveryTime, costForTwo, cloudinaryImageId } =
    resObj.info;

  return (
    <div className="dishCard1">
      <div className="dsImg">
        <img
          src={
            baseUrl +
            cloudinaryImageId
          }
          alt="res-log"
          className="dishImg"
        />
      </div>

      <div className="dsContent">
        <h3 className="restName">{name}</h3>
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h4 className="rate">
          <span className="star">✰</span>
          {avgRating} | stars
        </h4>
        <h4 className="deliveryTimeCost">
          {delieveryTime} mins | {costForTwo} for two
        </h4>
        <h4>{resObj.info.locality}</h4>
      </div>
    </div>
  );
};

export default DishCard;
