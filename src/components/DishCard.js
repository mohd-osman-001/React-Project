const DishCard = ({ resObj }) => {
  const { resName, cuisine, avgRating, delieveryTime, costForTwo, imgId } =
    resObj;

  return (
    <div className="dishCard1">
      <div className="dsImg">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imgId
          }
          className="dishImg"
        />
      </div>

      <div className="dsContent">
        <h3 className="restName">{resName}</h3>
        <h4 className="cuisine">{cuisine.join(", ")}</h4>
        <h4 className="rate">
          <span className="star">✰</span>
          {avgRating} | stars
        </h4>
        <h4 className="deliveryTimeCost">
          {delieveryTime} mins | {costForTwo} for two
        </h4>
      </div>
    </div>
  );
};

export default DishCard;
